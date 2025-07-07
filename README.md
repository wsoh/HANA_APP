# HANA_APP - main 브랜치 로 가네

# Guide: https://developers.sap.com/tutorials/xsa-connecting-webide.html

## 준비단계: Tenant DB 를 XSA Enabled 시켜라 => Enabled for XSA : Enabled
##
xs-admin-login

xs login -a <https://hxehost:39030> --skip-ssl-validation

xs enable-tenant-database HXE

xs map-tenant-database -o HANAExpress -s development HXE

##
##
##
프로젝트 셋팅에서 Space 를 테넨드 데이터베이스의 공간으로 반드시 지정할 것.


Could not provision resources for module - db build 할 때 장애 나면
 - Open HDI Container 메뉴 클릭해서 HDI container 재로딩 될때 까지 기다린 후 다시 빌드하면 되더라
 - 

## xs marketplace   --> sapui5_sb, sapui5_버전 구할 수 있음


## 다음 명령어 연습삼아 해보는 습관
 xs login -s development  <- development space 로 로그인
 xs a | grep web
 xs env  ....-web         <- sapui5 항목 찾아 방화벽 열어야.
 
## 다음의 순서 제대로 설명안해주는 게 가이드의 문제인 듯
xsa-cockpit URL 에서
   space 여러개 만들고
   tenant enable 시킨후
   tenane 에 여러개의 space 맵핑시키고
di-space-enablement-ui URL 에서
   space enable 해줄것
   
# 끝.
   
 