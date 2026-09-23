# iPad 전시용 홈 화면 웹앱 적용 작업지시서

## 목표

기존 웹페이지를 iPad 홈 화면에서 독립된 웹앱으로 실행해, 관람객이 스크롤할 때 Safari의 주소창과 도구 막대가 나타나지 않도록 한다. 기본 표시 방식은 `standalone`으로 한다.

## 현재 문제

- 웹페이지를 일반 Safari 탭에서 열면 화면을 크게 보이게 구현했더라도 스크롤 중 Safari UI가 다시 나타난다.
- Safari 자체 UI는 웹페이지의 JavaScript나 CSS로 안정적으로 강제 숨길 수 없다.
- 전시에서는 홈 화면에 추가한 아이콘으로 실행하는 흐름이 필요하다.

## 구현 요구사항

1. 먼저 프로젝트의 진입 HTML, 프레임워크별 문서 head 설정, 기존 웹앱 매니페스트 및 아이콘 파일 위치를 확인한다.
2. 기존 구조와 디자인, 라우팅, 스크롤 동작을 최대한 유지한다. 이미 같은 설정이 있다면 중복 태그나 매니페스트를 만들지 말고 기존 항목을 수정한다.
3. 문서의 `<head>`에 아래 iOS 설정이 적용되도록 한다. 기존 viewport가 있다면 교체 또는 병합해 중복을 피한다.

   ```html
   <meta name="apple-mobile-web-app-capable" content="yes">
   <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
   <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
   ```

   상태 막대 색상은 실제 전시 화면과 가독성에 맞춰 조정할 수 있다. `viewport-fit=cover`로 화면 가장자리까지 콘텐츠를 배치한다면 기존 레이아웃의 안전 영역 처리도 확인한다.

4. 웹앱 매니페스트가 있다면 `display`를 `standalone`으로 설정하고, HTML에서 해당 매니페스트가 연결되어 있는지 확인한다. 없다면 프로젝트 방식에 맞는 `manifest.json`을 추가하고 연결한다. `name`, `short_name`, `start_url`, `scope`, `icons` 등 기존 값이 있으면 보존하고, 신규 파일에서는 실제 배포 경로와 아이콘 파일에 맞게 설정한다.

   ```json
   {
     "name": "전시 웹앱",
     "short_name": "전시",
     "start_url": "/",
     "display": "standalone"
   }
   ```

   위 JSON은 예시다. `start_url`은 실제 전시 진입 경로에 맞춰야 한다. `fullscreen`은 iOS/iPadOS 버전과 실행 환경에 따라 표시 방식이 다를 수 있으므로 기본값으로 사용하지 않는다.

5. 홈 화면 아이콘으로 실행했을 때 필요한 내부 이동이 웹앱 안에서 정상 동작하는지 확인한다. 외부 링크, 새 창, 인증 흐름이 있다면 Safari로 전환되는지 점검하고 전시 동선에 맞게 처리한다.
6. 기존 프로젝트에 서비스 워커가 없다면 주소창 문제 해결만을 위해 새 서비스 워커나 오프라인 캐시를 추가하지 않는다. 네트워크가 불안정한 전시 환경에서 오프라인 기능이 필요하다면 별도 요구사항으로 다룬다.
7. Safari UI를 숨기기 위해 스크롤 잠금, 화면 높이 조작, 강제 전체화면 JavaScript, CSS 우회 기법을 추가하지 않는다.

## 적용 후 확인 체크리스트

- [ ] 진입 페이지에 iOS meta 태그와 viewport 설정이 중복 없이 반영되어 있다.
- [ ] 매니페스트가 정상 로드되고 `display`가 `standalone`이다.
- [ ] 홈 화면 아이콘의 이름과 이미지가 의도대로 보인다.
- [ ] 홈 화면 아이콘으로 실행한 화면에 Safari 주소창과 도구 막대가 없다.
- [ ] 페이지를 위아래로 스크롤해도 Safari 주소창과 도구 막대가 나타나지 않는다.
- [ ] 상단 상태 막대, 노치 및 화면 가장자리에서 중요한 콘텐츠가 가려지지 않는다.
- [ ] 전시에서 사용하는 내부 이동, 뒤로 가기, 새로고침, 입력 및 터치 조작이 정상 동작한다.
- [ ] 기존 데스크톱·모바일 브라우저 화면에 의도치 않은 변화가 없다.

## 실제 iPad 테스트 절차

1. 변경 사항을 iPad가 접속할 수 있는 주소에 배포한다. 가능하면 실제 전시에서 사용할 주소로 테스트한다.
2. iPad의 **Safari**에서 해당 웹페이지를 연다.
3. **공유** 버튼 → **홈 화면에 추가**를 선택한다. 화면에 옵션이 제공되면 웹앱으로 여는 설정을 선택한다.
4. 홈 화면에 생성된 아이콘을 눌러 실행한다. Safari 탭에서 계속 테스트하지 않는다.
5. 화면을 스크롤하고 주요 동선을 조작하면서 위 체크리스트를 확인한다.
6. 설정을 바꾼 뒤에도 이전 동작이 보이면 기존 홈 화면 아이콘을 제거하고 다시 추가해 재시험한다.

## 완료 보고 형식

변경한 파일과 핵심 설정, 실제 iPad에서 확인한 결과, 아직 확인하지 못한 항목을 간단히 보고한다. iPad 실기기가 없다면 홈 화면 실행 및 스크롤 결과를 검증했다고 쓰지 않는다.

## 참고 자료

- [Apple: Configuring Web Applications](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html)
- [WebKit: Web Push for Web Apps on iOS and iPadOS](https://webkit.org/blog/13878/web-push-for-web-apps-on-ios-and-ipados/)
