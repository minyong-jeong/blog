# flask 파일 업로드

flask를 이용하여 서버에 파일을 업로드 하는 방법을 정리하였습니다.

upload_main()은 파일 업로드를 위한 html를 렌더링합니다.

upload_files()은 서버에 파일을 업로드하는 역할을 합니다.

사용자가 서버의 파일시스템이 있는 파일을 수정하는 것을 방지하기 위해 secure_filename()를 사용합니다.

```python
import os
from flask import Flask, request
from werkzeug.utils import secure_filename

UPLOAD_DIR = "D:/"

app = Flask(__name__)
app.config['UPLOAD_DIR'] = UPLOAD_DIR

@app.route('/')
def upload_main():
    return """
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>File Upload</title>
    </head>
    <body>
        <form action="http://localhost:5000/file-upload" method="POST" enctype="multipart/form-data">
            <input type="file" name="file">
            <input type="submit">
        </form>
    </body>
    </html>"""

@app.route('/file-upload', methods=['GET', 'POST'])
def upload_files():
    if request.method == 'POST':
        f = request.files['file']
        fname = secure_filename(f.filename)
        path = os.path.join(app.config['UPLOAD_DIR'], fname)
        f.save(path)
        return 'File upload complete (%s)' % path

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
```
