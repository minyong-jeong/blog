import os
import json

l = {}
count = 0
work_dir = os.path.abspath('.')
for (dirpath, dirnames, filenames) in os.walk(work_dir):
    for filename in filenames:
        abs_path = dirpath + "/" + filename
        rel_path = abs_path.split(work_dir)[-1].replace("\\", "/")
        if (rel_path[-3:] == ".md"):
            info = {}
            info["id"] = count
            count = count + 1
            with open(abs_path, 'r', encoding='UTF8') as f:
                title = f.readline()
                title = title.replace('\n', '').replace(
                    '# ', '').replace('#', '')
                info["title"] = title

                description = ""
                while len(description) < 120:
                    line = f.readline()
                    if not line:
                        break
                    line = line.replace('#', '') \
                               .replace('\n', '') \
                               .replace('\t', '')
                    if '```' not in line and '~~~' not in line:
                        line = ' '.join(line.split())
                        description = description + line
                info["description"] = description

            rel_split = rel_path.split('/')[1:]
            info["markdown"] = rel_split[-1]
            info["path"] = rel_path[1:]
            info["tags"] = []
            for i in range(0, len(rel_split)-1):
                info["tags"].append(rel_split[i])
            l[rel_split[-1]] = info
print(l)

with open('./posts.json', 'w', encoding='UTF8') as f:
    json.dump(l, f, indent=4, ensure_ascii=False)
