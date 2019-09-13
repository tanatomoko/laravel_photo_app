<!-- ルートコンポーネント -->
<template>
  <div>
    <header>
      <Navbar />
    </header>
    <main>
      <div class="container">
        <Message />
        <RouterView /><!-- URL に対応する HTML 部品が入れ替わって描画される -->
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Message from './Message.vue'
import Navbar from './Navbar.vue'
import Footer from './Footer.vue'
import { INTERNAL_SERVER_ERROR } from '../util'

export default {
  components: {
    Message,
    Navbar,
    Footer
  },
  computed: {
    errorCode () {
      return this.$store.state.error.code
    }
  },
  watch: {
    errorCode: {
      handler (val) {
        if (val === INTERNAL_SERVER_ERROR) {
          this.$router.push('/500')
        }
      },
      immediate: true
    },
    $route () {
      this.$store.commit('error/setCode', null)
    }
  }
}
</script>
