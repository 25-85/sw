/**
 * 옷 측정 - 와이어프레임 앱 스크립트
 */

// 페이지 라우팅
function navigateTo(pageId) {
  const pages = document.querySelectorAll('.page-section');
  pages.forEach(p => p.classList.remove('active'));

  const targetPage = document.getElementById(`page-${pageId}`);
  if (targetPage) {
    targetPage.classList.add('active');
  }

  // 하단 탭 바 활성화 상태 업데이트
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    if (item.getAttribute('data-target') === pageId) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  // 스크롤 초기화
  const appBody = document.querySelector('.app-body');
  if (appBody) appBody.scrollTop = 0;
}

// 홈 카테고리 클릭
function selectCategory(category) {
  navigateTo('size-input');
  switchInputStep(2);
}

// 사이즈 입력 단계Switch (1, 1-detail, 2)
function switchInputStep(step) {
  const step1Basic = document.getElementById('step-1-basic');
  const step1Detail = document.getElementById('step-1-detail');
  const step2Cloth = document.getElementById('step-2-cloth');

  const tab1 = document.getElementById('step-tab-1');
  const tab2 = document.getElementById('step-tab-2');

  [step1Basic, step1Detail, step2Cloth].forEach(el => el.classList.remove('active'));

  if (step === 1) {
    step1Basic.classList.add('active');
    tab1.classList.add('active');
    tab2.classList.remove('active');
  } else if (step === '1-detail') {
    step1Detail.classList.add('active');
    tab1.classList.add('active');
    tab2.classList.remove('active');
  } else if (step === 2) {
    step2Cloth.classList.add('active');
    tab1.classList.remove('active');
    tab2.classList.add('active');
  }
}

// 마이페이지 서브탭 Switch
function switchMypageTab(tabName) {
  const tabRecord = document.getElementById('mypage-tab-record');
  const tabProfile = document.getElementById('mypage-tab-profile');
  const btn1 = document.getElementById('mypage-subtab-1');
  const btn2 = document.getElementById('mypage-subtab-2');

  if (tabName === 'record') {
    tabRecord.classList.add('active');
    tabProfile.classList.remove('active');
    btn1.classList.add('active');
    btn2.classList.remove('active');
  } else {
    tabRecord.classList.remove('active');
    tabProfile.classList.add('active');
    btn1.classList.remove('active');
    btn2.classList.add('active');
  }
}

// 신체 사진 첨부 시 엑스 박스 박스 안 이미지 표시
function handleBodyPhoto(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const box = document.getElementById('body-photo-preview');
      box.style.backgroundImage = `url(${e.target.result})`;
      box.style.backgroundSize = 'cover';
      box.style.backgroundPosition = 'center';
      box.innerHTML = ''; // 버튼 감추기
    };
    reader.readAsDataURL(file);
  }
}

// 모달 제어
function openSavedAnalysisModal() {
  document.getElementById('modal-saved-analysis').classList.add('active');
}

function openSavedBrandModal() {
  document.getElementById('modal-saved-brand').classList.add('active');
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.remove('active');
}
