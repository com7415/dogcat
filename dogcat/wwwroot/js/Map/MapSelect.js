﻿//--------------------카카오 주소 검색 api---------------------------

src = "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
function sample6_execDaumPostcode() {
    new daum.Postcode({
        oncomplete: function (data) {
            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

            // 각 주소의 노출 규칙에 따라 주소를 조합한다.
            // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
            var addr = ''; // 주소 변수
            var extraAddr = ''; // 참고항목 변수

            //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
            if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                addr = data.roadAddress;
            } else { // 사용자가 지번 주소를 선택했을 경우(J)
                addr = data.jibunAddress;
            }
            // 우편번호와 주소 정보를 해당 필드에 넣는다.
            document.getElementById("address").value = addr;
        }
    }).open();
}

//주소 입력 안하고 지도 버튼 누르면 주소 입력 요청
function redirectToMapAnimalHospital() {
    var address = document.getElementById('address').value;
    if (address === '') {
        alert('주소를 입력해주세요!');
        return;
    }
    var url = '/map/MapAnimalHospital?address=' + encodeURIComponent(address);
    window.location.href = url;
    document.getElementById('address').value = ''; // 주소 입력 필드 초기화
}

function redirectToMapTrail() {
    var address = document.getElementById('address').value;
    if (address === '') {
        alert('주소를 입력해주세요!');
        return;
    }
    var url = '/map/MapTrail?address=' + encodeURIComponent(address);
    window.location.href = url;
    document.getElementById('address').value = ''; // 주소 입력 필드 초기화
}