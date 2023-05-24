<img src = "./docs/img/MainPage.png">

# SKYEYE
> 드론을 통한 건물 균열 파악 AI

> __D202__  
강모현, 박성환, 박재현, 양서정, 이병수, 이효진

> __개발 기간__: 2023.04.10 ~ 2023.05.26 (약 7주) 

<br>

## 팀원 역할
| 이름   | 역할 | 내용                         |
| ------ | ---- | ---------------------------- |
| 강모현 | AI   | AI + Flask |
| 박성환 | BE   | BE + Infra/nginx |
| 박재현 | BE   | BE + Spring Security/JWT + oauth |
| 이효진 | BE   | FE/BE + 이미지 조회 |
| 양서정 | FE   | FE + auth |
| 이병수 | FE   | FE + 이미지 업로드 |

<br>

### UCC ➡ [유튜브](https://www.youtube.com/watch?v=wo5gehQzfqk)
### 발표자료 ➡ [중간 발표자료](docs/발표자료/D202_중간발표.pdf) / [최종 발표자료](docs/발표자료/d202_최종발표.pdf)
### Notion ➡ [노션](https://www.notion.so/AIOT-TEAM-D202-d4febb480e784d6e83dad73a58b9c95c)

<br>

---

<br>

## 기획 배경 및 목표
### 사람이 직접 접근하기 힘든 구역의 건물 균열을 드론을 통해 탐지
> 고층 빌딩 혹은 교각의 경우 사람이 직접 균열을 탐지하기 힘든 부분이 존재함
* 이를 드론과 AI를 이용하여 자동으로 균열을 탐지하여 저장을 하는 서비스와 동시에 업로드 한 사진을 자동으로 분류하고 관리하는 서비스 제공


<br>

## 기술 스택 & 아키텍쳐
<img src = "./docs/img/ServiceArchitecture.png">
<br>
<br>

### Front-End
<div>
	<img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white" />
	<img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=Node.js&logoColor=white" />
	<img src="https://img.shields.io/badge/Recoil-0052FF?style=flat&logo=Recoil&logoColor=white" />
    <img src="https://img.shields.io/badge/axios-5A29E4?style=flat&logo=axios&logoColor=white" />
	<img src="https://img.shields.io/badge/ReactRouter-CA4245?style=flat&logo=ReactRouter&logoColor=white" />
    <img src="https://img.shields.io/badge/typescript-3178C6?style=flat&logo=typescript&logoColor=white" />
    <img src="https://img.shields.io/badge/emotion-CA4245?style=flat&logo=emotion&logoColor=white" />
    <img src="https://img.shields.io/badge/vite-646CFF?style=flat&logo=vite&logoColor=white" />
</div>

### Back-end
<div>
	<img src="https://img.shields.io/badge/Springboot-6DB33F?style=flat&logo=Springboot&logoColor=white" />
	<img src="https://img.shields.io/badge/JPA-6DB33F?style=flat&logo=JPA&logoColor=white" />
    <img src="https://img.shields.io/badge/hibernate-59666C?style=flat&logo=hibernate&logoColor=white" />
	<img src="https://img.shields.io/badge/jsonwebtokens-000000?style=flat&logo=jsonwebtokens&logoColor=white" />
    <img src="https://img.shields.io/badge/Swagger-85EA2D?style=flat&logo=Swagger&logoColor=white" />
	<img src="https://img.shields.io/badge/mariadb-003545?style=flat&logo=mariadb&logoColor=white" />
	<img src="https://img.shields.io/badge/postman-FF6C37?style=flat&logo=postman&logoColor=white" />
</div>

### AI
<div>
	<img src="https://img.shields.io/badge/flask-000000?style=flat&logo=flask&logoColor=white"/>
	<img src="https://img.shields.io/badge/tensorflow-FF6F00?style=flat&logo=tensorflow&logoColor=white"/>
	<img src="https://img.shields.io/badge/opencv-5C3EE8?style=flat&logo=opencv&logoColor=white"/>
	<img src="https://img.shields.io/badge/keras-D00000?style=flat&logo=keras&logoColor=white"/>

</div>

### TEAM Cooperation
<div>
	<img src="https://img.shields.io/badge/gitlab-FC6D26?style=flat&logo=gitlab&logoColor=white" />
	<img src="https://img.shields.io/badge/jirasoftware-0052CC?style=flat&logo=jirasoftware&logoColor=white" />
    <img src="https://img.shields.io/badge/notion-000000?style=flat&logo=notion&logoColor=white" />
	<img src="https://img.shields.io/badge/mattermost-0058CC?style=flat&logo=mattermost&logoColor=white" />
	<img src="https://img.shields.io/badge/figma-F24E1E?style=flat&logo=figma&logoColor=white" />
</div>

<br>

---

<br>

## 서비스 소개

* 드론 원격 조종을 통하여 AI 객체 검출을 통하여 사진을 자동으로 저장
* Flask 서버에 이미지를 업로드하여 자동으로 분류 후 DB에 저장
* 웹 서버에서 분류 된 이미지를 조회 및 다운로드 진행
<br>

## 시나리오

### 0. 회원가입/ 로그인 선택

#### 회원가입
<div>
	<img src="./docs/img/RegistUserPage.png" />
<div/>

#### 로그인
<div>
	<img src="./docs/img/LoginPage.png" />
<div/>


### 1. 사진 업로드

#### 로그인 후 화면
<div>
	<img src="./docs/img/LoginSuccessPage.png" />
</div>

#### 폴더 
<div>
	<img src="./docs/img/UploadCrackPage1.png" />
	<img src="./docs/img/AddFolderPage.png" />
	<img src="./docs/img/UploadCrackPage2.png" />
	<img src="./docs/img/UploadCrackPage3.png" />
</div>

#### 비행금지구역 확인
<div>
	<img src="./docs/img/No-flyZonePage.png" />
<div/>

### 2. 사진 조회 / 다운로드


<div>
	<img src="./docs/img/ViewCrackPage1.png" />
	<img src="./docs/img/ViewCrackPage2.png" />
	<img src="./docs/img/ViewCrackPage3.png" />
	<img src="./docs/img/ViewCrackPage4.png" />
<div/>



### 3. 관리자

#### 로그인

<div>
	<img src="./docs/img/LoginPage.png" />
<div/>

#### 정보조회
<div>
	<img src="./docs/img/AdminPage.png" />
<div/>

### 4. 드론 화면

#### 드론
<div>
	<img src="./docs/img/DroneScreen.png" />
	<img src="./docs/img/ResultDroneScreen.png" />
<div/>


##### 상세 시연 시나리오 ➡ [노션 링크](https://www.notion.so/7c0af35d8abd45f495057c9d211105ec)

<br>

---

<br>

## DB ERD
<img src = "./docs/dberd/DBERD.png">


