# logrotate

logroate는 로그를 관리하는 도구입니다.

/etc/logrotate.conf 또는 /etc/logrotate.d/* 에 설정합니다.

## logrotate 옵션

- daily, weekly, monthy, yearly => 매일, 매주, 매달, 매년 시행
- rotate <갯수> => 지정한 갯수 만큼만 보관
- compress => 해당되는 로그파일을 압축(gzip)
- nocompress => 해당되는 로그파일을 압축하지 않음
- dateext => 로그명에 확장자 추가
- dateformat => 날짜 형식 지정
- missingok => 로그파일이 없어도 에러 처리하지 않음
- ifempty => 비어있는 경우에도 실행
- noifempty => 로그파일이 비어있는 경우 실행하지 않음
- prerotate / endscript => 실행 전 스크립트 파일 실행
- postrotate / endscript => 실행 후 스트립트 파일 실행
- copytruncate => 현재 로그파일 복사 후 원본파일 크기는 0으로 생성

(설정예시)

```text
/path/to/logfile {
    copytruncate
    create 0644 jmy jmy
    daily
    rotate 14
    missingok
    notifempty
    dateext
    prerotate
    dateformat .%Y%m%d
}
```
