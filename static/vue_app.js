new Vue({
    el: "#vue_app",
    delimiters: ['[[', ']]'],
    data: {
        csrf_token: '',
        error: {},
        pokemon_list: [],
        new_pokemon: {                            
            number: 0,
            name: '',
            height: 0,
            weight: 0,
            density: 0,
            image_front: '',
            image_back: '',
            caught_by: '',
            types: '',
        },
    }, // end Vue data
    methods: {
        populate_pokemon: function() {
            axios({
                method: 'GET',
                url: '/api/v1/pokemon/',
            }).then(response => {
                this.pokemon_list = response.data
            }).catch(error => {
                console.log('error @ populate_pokemon: function()')
                console.log(error)
                console.log(error.response.data)
                this.error = error
            })
        }, // end populate_pokemon: function()
        add_new_pokemon: function() {
            axios({
                method: 'POST',
                url: '/api/v1/pokemon/',
                headers: {
                    'X-CSRFToken': this.csrf_token
                }
            }).then(response => {
                location.reload() // basic JS reload-webpage syntax
            }).catch(error => {                    
                console.log('error @ add_new_pokemon: function()')
                console.log(error)
                console.log(error.response.data)
                this.error = error
            })
        }, // end add_new_pokemon: function()
    }, // end Vue methods
    created: function() {

    }, // end Vue created, which executes on vue JS creation
    mounted: function() {
        this.csrf_token = document.querySelector('input[name="csrfmiddlewaretoken"]').value // annoying but necessary
        this.populate_pokemon()
    }, // end Vue mounted, which executes on full JS page load
}) // end Vue