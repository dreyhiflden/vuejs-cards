const cardComponent = {
  props: ['card', 'isfavorite'],
  template: `
        <div class="bordered">
          <h4>{{ card.title }}</h4>
          <hr v-show="card.subtitle && !card.isHidden" />
          <span v-if="!card.isHidden">{{ card.subtitle }}</span>
          <button @click="$emit('remove-this', card)">Remove this card</button> 
          <button v-if="!card.isHidden && card.subtitle" @click="$emit('hide-subtitle', card)">Hide subtitle</button>
          <button v-if="card.isHidden" @click="$emit('show-subtitle', card)">Show subtitle</button>
          <button v-if="!card.isHidden && !checkIsFavorite(card)" @click="$emit('add-to-favorites', card)">Add to fav</button>
          <button v-if="!card.isHidden && checkIsFavorite(card)" @click="$emit('remove-from-favorites', card)">Remove 
          from fav</button>
        </div>
      `,
  methods: {
    checkIsFavorite(card) {
      return this.isfavorite(card);
    },
  },
};

new Vue({
  el: '#app',
  components: {
    'card-component': cardComponent,
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
    listFavorites: [],
  },
  methods: {
    remove() {
      this.cards.pop();
    },

    removeThis(card) {
      this.cards.splice(this.cards.indexOf(card), 1);
      this.removeFromFavorites(card);
    },

    setHide(card) {
      this.$set(card, 'isHidden', true);
    },

    setVisible(card) {
      card.isHidden = false;
    },

    addToFavorites(card) {
      if (this.listFavorites.indexOf(card.id) === -1) {
        this.listFavorites.push(card.id);
      }
    },

    removeFromFavorites(card) {
      this.listFavorites.splice(this.listFavorites.indexOf(card.id), 1);
    },

    isFavorite(card) {
      return this.listFavorites.indexOf(card.id) !== -1;
    },
  },
});
