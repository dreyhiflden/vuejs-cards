const componentCard = {
  props: ['card'],
  template: `
        <div class="bordered">
          <h4>{{ card.title }}</h4>
          <hr v-show="card.subtitle && !card.isHidden" />
          <span v-if="!card.isHidden">{{ card.subtitle }}</span>
          <button @click="$emit('remove-this', card)">Remove this card</button> <!-- removeThis(card) -->
          <button v-if="!card.isHidden && card.subtitle" @click="$emit('hide-subtitle', card)">Hide subtitle</button>
          <button v-if="card.isHidden" @click="$emit('show-subtitle', card)">Show subtitle</button>
        </div>
      `,
};

new Vue({
  el: '#app',
  components: {
    'component-card': componentCard
  },
  data: {
    cards: [
      {
        id: 1,
        title: 'Seitan polaroid flannel',
        subtitle: 'next level',
      },
      { id: 2, title: 'Street art swag' },
      {
        id: 3,
        title: 'Deep v selvage tousled',
        subtitle: 'tousled copper mug, gochujang crucifix try-hard tbh',
      },
    ],
  },
  methods: {
    remove() {
      this.cards.pop();
    },

    removeThis(card) {
      this.cards.splice(this.cards.indexOf(card), 1);
    },

    setHide(card) {
      this.$set(card, 'isHidden', true);
    },

    setVisible(card) {
      card.isHidden = false;
    }
  },
});
