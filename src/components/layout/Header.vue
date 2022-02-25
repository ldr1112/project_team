<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <!-- 이미지에 모달 버튼 넣기 -->
      <button id="" v-b-modal.modal-1 type="button" class="btn btnEvent">
        <b-modal id="modal-1" title="HooHa! HooHa!">
          <img src="@/assets/11.gif" />
          <p class="my-4">Hello training!</p>
        </b-modal>
        <img src="@/assets/team_logo1.png" alt="btnImages" class="btnImages" />
      </button>

      <b-navbar-brand href="#" to="/">Home Training</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#" to="/scheduler/free">스케줄러</b-nav-item>
          <b-nav-item href="#" to="/opencv/free">opencv</b-nav-item>
          <b-nav-item href="#" to="/data_analyze/free">데이터 분석</b-nav-item>
          <b-nav-item href="#" to="/board/free">정보 공유 게시판</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit" style="margin-right: 10px">Search</b-button>
            <b-button size="sm" class="my-2 my-sm-0">로그인</b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
