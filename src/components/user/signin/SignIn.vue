<template>
  <v-container>
    <v-card class="mx-auto" max-width="700" height="340" outlined>
      <v-row justify="center">
        <v-card-title>로그인</v-card-title>
      </v-row>
      <v-row justify="center">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row justify="center">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
              @keyup.enter="login"
            ></v-text-field>
          </v-row>

          <v-row justify="center">
            <v-text-field
              v-model="password"
              :append-icon="isShowPw ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="isShowPw ? 'text' : 'password'"
              name="input-10-2"
              label="Password"
              class="input-group--focused"
              @click:append="isShowPw = !isShowPw"
              @keyup.enter="login"
            ></v-text-field>
          </v-row>

          <v-row justify="center" :style="{ 'margin-top': '20px' }">
            <v-btn
              block
              class="ma-2"
              :disabled="!valid"
              color="indigo"
              outlined
              @click="login"
            >
              로그인하기
            </v-btn>
          </v-row>

          <v-row justify="center">
            <v-btn
              block
              class="ma-2"
              color="orange"
              outlined
              @click="$router.push({ name: 'SignUp' })"
            >
              이메일로 회원가입하기
            </v-btn>
          </v-row>
        </v-form>
      </v-row>
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: "",

  components: {},

  data() {
    return {
      valid: true,
      email: "",
      emailRules: [
        (v) => !!v || "이메일을 입력해주세요.",
        (v) => /.+@.+\..+/.test(v) || "이메일 형식에 맞지 않습니다."
      ],
      password: "",
      rules: {
        required: (value) => !!value || "비밀번호를 입력해주세요.",
        min: (v) => v.length >= 8 || "비밀번호를 8자 이상 입력해주세요."
      },
      isShowPw: false
    };
  },

  methods: {
    login() {
      if (!this.$refs.form.validate()) return;

      this.$store
        .dispatch("signIn", {
          email: this.email,
          password: this.password
        })
        .then((isLogin) => {
          if (isLogin) {
            alert("로그인 성공");
            this.$router.push({ name: "Home" });
          } else {
            alert("회원 정보가 올바르지 않습니다.");
          }
        });
    }
  }
};
</script>
<style scoped>
.v-card__title {
  margin-top: 20px;
  font-family: "IBM Plex Sans KR", sans-serif;
  font-weight: 600;
  font-size: 26px;
  color: #2c3333;
}
.v-input {
  width: 280px;
  font-family: "IBM Plex Sans KR", sans-serif;
  font-weight: 600;
  font-size: 22px;
  color: #2c3333;
}
</style>
