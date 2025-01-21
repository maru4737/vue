<template>
  <main id="iw_container">
    <div class="tit-page-wrap">
      <h2>로그인 방식을 선택해주세요.</h2>
    </div>
    <div class="conts-wrap">
      <div class="section-2">
        <div class="login-wrap">
          <!-- 한 번에 본인 인증 -->
          <div class="section-3">
            <h3>한 번에 본인 인증하고 모든 서비스 이용하기</h3>
            <div class="login-type-wrap">
              <a
                href="#"
                class="login-type"
                @click="openSimpleCertModal"
              >
                <div class="badge-wrap">
                  <span class="badge round any-id">Any-Id</span>
                </div>
                <i class="iconset lg ico-certification-simple" />
                <p class="tit">간편인증</p>
                <p class="txt">네이버, 카카오 등 민간 전자서명 사업자가 제공하는 전자서명을 이용하여 로그인</p>
              </a>
              <a
                href="#"
                class="login-type"
                @click.prevent="handleLogin('cert')"
              >
                <div class="badge-wrap">
                  <span class="badge round any-id">Any-Id</span>
                </div>
                <i class="iconset lg ico-certification-official" />
                <p class="tit">공동 인증서</p>
                <p class="txt">공식기관에서 발급받은 공동 인증서(구 공인인증서)로 로그인</p>
              </a>
              <a
                href="#"
                class="login-type"
                @click.prevent="handleLogin('finance')"
              >
                <div class="badge-wrap">
                  <span class="badge round any-id">Any-Id</span>
                </div>
                <i class="iconset lg ico-certification-finanace" />
                <p class="tit">금융 인증서</p>
                <p class="txt">은행 앱 또는 인터넷뱅킹 사이트에서 발급한 금융결제원의 인증서로 로그인</p>
              </a>
              <a
                href="#"
                class="login-type"
                @click.prevent="handleLogin('mobile')"
              >
                <div class="badge-wrap">
                  <span class="badge round any-id">Any-Id</span>
                </div>
                <i class="iconset lg ico-certification-mobile" />
                <p class="tit">모바일 신분증</p>
                <p class="txt">행정안전부에서 제공하는 모바일 신분증 앱을 이용하여 로그인</p>
              </a>
            </div>
          </div>
          <div class="section-3">
            <!-- 간단히 로그인 -->
            <h3>간단히 로그인하고 필요시 본인 인증하기</h3>
            <div class="login-type-wrap">
              <a
                href="#"
                class="login-type"
                @click.prevent="handleLogin('id')"
              >
                <i class="iconset lg ico-certification-id" />
                <p class="tit">아이디 로그인</p>
                <p class="txt">범정부 통합포털 회원 가입 시 등록한 아이디를 이용하여 로그인</p>
              </a>
              <a
                href="#"
                class="login-type"
                @click.prevent="handleLogin('private')"
              >
                <div class="badge-wrap">
                  <span class="badge round any-id">Any-Id</span>
                </div>
                <i class="iconset lg ico-certification-mobile" />
                <p class="tit">민간 아이디</p>
                <p class="txt">네이버, 카카오 등 민간 사이트 계정을 이용하여 로그인</p>
              </a>
            </div>
          </div>
        </div>
        <!-- help-info-link -->
        <div class="help-info-link">
          <div class="block">
            <p class="txt">
              아직 범정부 통합포털 회원이 아니신가요?
            </p>
            <a
              href="#"
              class="btn-txt ico-arr-right"
              @click.prevent="handleLogin('etc')"
            >회원가입</a>
          </div>
        </div>
      </div>
    </div>
    <!-- <LoginSimpleCertModal
      ref="simpleCertModal"
      @auth-success="handleAuthSuccess"
      @auth-fail="handleAuthFail"
    /> -->
  </main>
</template>

<script>
//import LoginSimpleCertModal from '@/components/login/simpleCertModal.vue'
import '@/assets/static/css/import.css'
//import { useSessionStore } from '~/stores/common/SessionStore'
//import { useFormStore, useParseTokenStore } from '~/stores/login/loginMember'
//import { useLoginStore } from '~/stores/login/LoginStore'

//const sessionStore = useSessionStore()
export default {
  components: {
    //LoginSimpleCertModal,
  },
  data() {
    return {
      formData: {
        a: '/nlogin/loginByIdPwd',
        currUrl: '',
        vidMsg: '',
        xml: '',
        pkcs1Msg: '',
        randomnum: '',
        lgnTypeCd: '',
        certiType: '',
        certiType2: '',
        browserYn: '',
        regYn: '',
        isTouchYn: '',
        certstSeCd: '',
        loginGb: '',
        loginFlag: '',
        cdFlag: '',
        dynaPathVer: '',
      },
    }
  },
  methods: {
    openSimpleCertModal() {
      this.$refs.simpleCertModal.openModal()
    },
    handleAuthSuccess(authResult) {
      console.log('인증 성공:', authResult)
      this.sendParseToken(authResult)
    },
    handleAuthFail(error) {
      if (error === 'close-modal') {
        return
      }
      console.error('인증 실패:', error)
    },
    // async sendParseToken(authResult) {
    //   try {
    //     // 스토어 액션 호출
    //     const store = useParseTokenStore()
    //     const result = await store.fetchParseToken(authResult)
    //     // alert(result.parseCd)
    //     // alert(result.parseMsg)
    //     // alert(result.reqTxId)
    //     this.formData.lgnTypeCd = '02'
    //     // alert('1111')
    //     this.formData.reqTxId = result.reqTxId
    //     // alert('222222')
    //     console.log('loginSimple 함수 참조:')
    //     await this.loginSimple(result)
    //     console.log('loginSimple 호출 완료') // 호출 완료 확인
    //     console.log('파싱 결과:', result)
    //     if (result.failPoint) {
    //       alert(result.message || '알 수 없는 오류가 발생했습니다.')
    //     }
    //     else {
    //       console.log('정상 처리:', result)
    //       // 추가 로직
    //     }
    //   }
    //   catch (err) {
    //     console.error('파싱 실패:', err)
    //   }
    // },
    // async loginSimple() {
    //   // console.log('스토어 확인:', store)

    //   const baseUrl = useRuntimeConfig().public.userApiUrl
    //   console.log('Base URL:', baseUrl) // baseUrl 확인
    //   // alert(baseUrl) // alert 호출 여부 확인

    //   const store = useFormStore()
    //   // console.log('스토어 확인:', store)
    //   // console.log('loginSimple 메서드 확인:', store.loginSimple)

    //   // const config = useRuntimeConfig()
    //   // console.log('Runtime Config:', config)
    //   // console.log('Public API URL:', config.public.userApiUrl)

    //   try {
    //     const { data, status, error } = await useAsyncData('setSession', () => sessionStore.setSession())
    //     console.log('setSession data : ' + data.value)
    //     console.log('setSession status : ' + status.value)
    //     console.log('setSession error : ' + error.value)
    //     const response = await store.loginSimple(this.formData)
    //     console.log('response : ' + response)
    //     if (!response.success) {
    //       console.log('failpoint : ' + response.failPoint)
    //       alert(response.message)
    //     }
    //     else {
    //       console.log('failpoint : ' + response.failPoint)
    //       const { data, status, error } = await useAsyncData('setSession', () => sessionStore.setSession())
    //       console.log('setSession data : ' + data.value)
    //       console.log('setSession status : ' + status.value)
    //       console.log('setSession error : ' + error.value)
    //       // ('폼 데이터 전송 성공!')
    //       navigate('/')
    //     }
    //     // alert('폼 데이터 전송 성공!')
    //   }
    //   catch (error) {
    //     console.error('폼 데이터 전송 실패:', error)
    //     // alert('폼 데이터 전송 실패')
    //   }
    // },

    // async checkSessionData() {
    //   const store = useLoginStore()
    //   await store.checkSession()

    //   if (store.sessionData) {
    //     console.log('세션활성화 상태 remaindingTime : ' + store.sessionData.remaindingTime)
    //     console.log('세션 데이타', store.sessionData)
    //     console.log('세션 데이타 userId', store.sessionData.user?.userId)
    //     if (store.sessionData.user) {
    //       Object.entries(store.sessionData.user).forEach(([key, value]) => {
    //         console.log(`${key}: ${value}`)
    //       })
    //     }
    //   }
    //   else {
    //     console.log('세션 비활성화')
    //     console.log('세션 데이타', store.sessionData.sessionActive)
    //   }
    // },

    loadFinCertScript() {
      return new Promise((resolve, reject) => {
        if (window.FinCert) {
          resolve()
          return
        }

        const scriptElem = document.createElement('script')
        // 오늘 날짜를 YYYYMMDD 형식으로 변환
        const today = new Date()
        const formattedDate = `${today.getFullYear()}${String(today.getMonth() + 1).padStart(2, '0')}${String(today.getDate()).padStart(2, '0')}`
        // const scriptElem = document.createElement('script')
        scriptElem.src = `https://t-4user.yeskey.or.kr/v1/fincert.js?dt=${formattedDate}`

        scriptElem.onload = resolve
        scriptElem.onerror = () => reject(new Error('금융 인증서 스크립트 로드 실패'))
        document.body.appendChild(scriptElem)
      })
    },
    initializeFinCert() {
      return new Promise((resolve, reject) => {
        if (!window.FinCert) {
          reject(new Error('FinCert SDK가 로드되지 않았습니다.'))
          return
        }

        window.FinCert.Sdk.init({
          orgCode: 'DE00310002',
          apiKey: '9a153b95-cf5a-4a89-9fc6-b022c4240af0',
          lang: 'kor',
          success: resolve,
          fail: function
          (error) {
            console.error('초기화 실패:', error.code, error.message)
            reject(new Error(`초기화 실패: ${error.code || 'Unknown'}: ${error.message || 'No message'}`))
          },
        })
      })
    },
    signWithFinCert() {
      if (!window.FinCert) {
        console.error('FinCert SDK가 초기화되지 않았습니다.')
        return
      }

      window.FinCert.Sdk.sign({
        signFormat: {
          type: 'CMS',
          CMSInfo: {
            ssn: 'dummy',
          },
        },
        // content: {
        //   binary: {
        //     //binaries: binaries,
        //   },
        // },
        algorithms: 'RSASSA-PKCS1-v1_5_SHA256',
        view: {
          lastAccessCert: false,
          oid: {
            '1.2.410.200005.1.1.1.10': true,
          },
          // enableTextView: true,
        },
        info: {
          signType: '01',
        },
        success(result) {
          console.log('전자서명 성공')
          console.log('전자서명 수행 인증서 일련번호:', result.certSeqNum)
          result.signedVals.forEach((element) => {
            console.log(element)
          })
        },
        fail(error) {
          console.error('전자서명 실패:', `${error.code}: ${error.message}`)
        },
      })
    },
    async handleLogin(type) {
      switch (type) {
        case 'finance':
          alert('금융인증 로그인 진행')
          /*
          try {
            await this.loadFinCertScript()
            await this.initializeFinCert()
            this.signWithFinCert()
          }
          catch (error) {
            console.error('금융 인증서 처리 중 오류:', error.message)
          }
          */
          break
        case 'simple':
          alert('서비스 준비중입니다.')
          break
        case 'cert':
          alert('서비스 준비중입니다.')
          break
        case 'mobile':
          alert('서비스 준비중입니다.')
          break
        case 'id':
          this.$router.push('/login/loginIdPwd')
          break
        case 'private':
          alert('서비스 준비중입니다.')
          break
        default:
          alert('서비스 준비중입니다.')
      }
    },
    // async handleSessionData() {
    //   try {
    //     const abaseURL = useRuntimeConfig().public.userApiUrl
    //     // API 호출
    //     const response = await $fetch(`${abaseURL}/nlogin/checkSession`, {
    //       method: 'POST',
    //       headers: { 'Content-Type': 'application/json' },
    //       credentials: 'include',
    //     })

    //     // API 응답 처리
    //     if (response && response.sessionActive !== undefined) {
    //       this.sessionData = response
    //     }
    //     else {
    //       this.errorMessage = '세션 정보를 가져올 수 없습니다.'
    //     }

    //     if (this.sessionData && this.sessionData.user) {
    //       console.log('User Data Details:')
    //       Object.entries(this.sessionData.user).forEach(([key, val]) => {
    //         console.log(`Key: ${key}, Value:`, val)
    //       })
    //     }

    //     if (this.sessionData && this.sessionData.user) {
    //       const user = this.sessionData.user
    //       console.log(`User Name: ${user.userNm}`)
    //       console.log(`Email: ${user.eml}`)
    //       console.log(`userId: ${user.userId}`)
    //     }
    //   }
    //   catch (error) {
    //     this.errorMessage = '서버와 통신 중 문제가 발생했습니다.'
    //     console.error('Error:', error)
    //   }
    // },
  },
}
</script>
