<template>
  <div class="hello">
    <form>
      <button type="submit" @click="subscribe">{{ subscribedState }}</button>
      <input type="text" v-model="message" />
      <button type="submit" @click="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      message: "",
      isSubscribed: false
    };
  },
  computed: {
    subscribedState() {
      return this.isSubscribed ? "Unsubscribe" : "Subscribe";
    }
  },
  mounted() {},
  methods: {
    subscribe(e) {
      e.preventDefault();
      if (!this.isSubscribed) {
        this.$socket.sendObj({
          command: "subscribe",
          identifier: '{"channel":"EchoChannel"}'
        });
      }
      this.isSubscribed = !this.isSubscribed;
    },
    submit(e) {
      e.preventDefault();
      this.$socket.sendObj({
        command: "message",
        identifier: '{"channel":"EchoChannel"}',
        data: JSON.stringify({
          message: this.message,
          action: "chat"
        })
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
