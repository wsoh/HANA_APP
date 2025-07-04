# HANA_APP
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
