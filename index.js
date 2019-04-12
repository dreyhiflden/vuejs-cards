new Vue({
  el: '#app',
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
