const fs = require("fs");
const path = require("path");

async function* walk(dir) {
    for await (const d of await fs.promises.opendir(dir)) {
        const entry = path.join(dir, d.name);
        if (d.isDirectory()) yield* walk(entry);
        else if (d.isFile()) {
            if (entry.slice(-3) === ".md")
                yield entry;
        }
    }
}

async function main() {
    const jsonData = {};
    const tagSet = new Set();
    let id = 0;
    for await (const p of walk(__dirname)) {
        const absPath = p;
        const relPath = absPath.replace(__dirname+'\\', '').replace(/\\/gi, '/');
        const info = relPath.split('/');
        const markdown = info[info.length-1];
        const tags = info.slice(0, info.length-1);
        for await (const tag of tags) {
            tagSet.add(tag);
        }

        const data = await fs.readFileSync(absPath, 'utf8');
        const title = data.split('\n')[0].replace(/\n|\t|^# |#|\r|/gi, '');
        const description = data.replace('# '+title, '').replace(/\r|\t|\n|#/gi, '').replace(/\s\s+/gi, ' ').slice(0, 120);

        const post = {
            "id": id,
            "title": title,
            "description": description,
            "markdown": markdown,
            "path": relPath,
            "tags": tags
        }
        id = id + 1;
        jsonData[markdown] = post;
    }

    const dictstring = JSON.stringify(jsonData, null, 4);
    fs.writeFileSync(__dirname + "/posts.json", dictstring);
}

main();