/**
 * 핏센스 (FitSense) - SPA 라우팅 및 인터랙션 스크립트
 */

// 페이지 화면 전환 함수
function navigateTo(pageId) {
  // 모든 페이지 숨기기
  const pages = document.querySelectorAll('.page-section');
  pages.forEach(page => page.classList.remove('active'));

  // 대상 페이지 표시
  const targetPage = document.getElementById(`page-${pageId}`);
  if (targetPage) {
    targetPage.classList.add('active');
  }

  // 상단 네비게이션 버튼 활성화 상태 변경
  const navBtns = document.querySelectorAll('.nav-btn');
  navBtns.forEach(btn => {
    if (btn.getAttribute('data-target') === pageId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // 페이지 이동 시 맨 위로 스크롤
  window.scrollTo(0, 0);
}

// 홈 화면 카테고리 선택 시 이동
function selectCategory(category) {
  console.log(`선택된 카테고리: ${category}`);
  navigateTo('size-input');
  switchInputStep(2); // 옷 입력 단계로 바로 넘어가기
}

// 사이즈 입력 단계 전환 (1단계 신체 / 1-상세 / 2단계 옷)
function switchInputStep(step) {
  const step1 = document.getElementById('input-step-1');
  const step1Detail = document.getElementById('input-step-1-detail');
  const step2 = document.getElementById('input-step-2');

  const tab1 = document.getElementById('step-tab-1');
  const tab2 = document.getElementById('step-tab-2');

  // 모든 입력 단계 일단 비활성화
  [step1, step1Detail, step2].forEach(el => el.classList.remove('active'));

  if (step === 1) {
    step1.classList.add('active');
    tab1.classList.add('active');
    tab2.classList.remove('active');
  } else if (step === '1-detail') {
    step1Detail.classList.add('active');
    tab1.classList.add('active');
    tab2.classList.remove('active');
  } else if (step === 2) {
    step2.classList.add('active');
    tab1.classList.remove('active');
    tab2.classList.add('active');
  }
}

// 마이페이지 탭 전환 (피드백 / 내정보)
function switchMypageTab(tabName) {
  const feedbackTab = document.getElementById('mypage-content-feedback');
  const profileTab = document.getElementById('mypage-content-profile');
  const tabBtn1 = document.getElementById('mypage-tab-1');
  const tabBtn2 = document.getElementById('mypage-tab-2');

  if (tabName === 'feedback') {
    feedbackTab.classList.add('active');
    profileTab.classList.remove('active');
    tabBtn1.classList.add('active');
    tabBtn2.classList.remove('active');
  } else {
    feedbackTab.classList.remove('active');
    profileTab.classList.add('active');
    tabBtn1.classList.remove('active');
    tabBtn2.classList.add('active');
  }
}

// 전신 사진 업로드 미리보기 처리
function handleBodyPhoto(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const previewBox = document.getElementById('body-photo-preview');
      previewBox.innerHTML = `<img src="${e.target.result}" style="max-height: 180px; border-radius: 8px;">`;
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
