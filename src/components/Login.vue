<template>
  <div>
    <form>
      <div class="form-group" style="margin-top: 100px">
        <label for="exampleInputEmail1">아이디</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
        <small id="emailHelp" class="form-text text-muted">소문자 대문자를 구분해주세요</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">비밀번호</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
      </div>
      <button type="button" class="btn btn-success">로그인</button>
      <button type="button" class="btn btn-danger">취소</button>
      <button type="button" class="btn btn-warning">회원가입</button>
    </form>
  </div>
</template>
<script>
export default {
  name: 'form-group'

}
</script>
<style type="text/css">
.form-group {
  width: 30%;
  height: 100px;
  margin: 0 auto;

}
</style>