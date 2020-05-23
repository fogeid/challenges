const AppHeader = {
    name: "AppHeader",
    template: `
        <div>
            <p class="header__title py-2">Teste para Desenvolvedor Frontend Jr Enext</p>                    
        </div>
    `
};

const AppImg = {
    name: "AppMain",
    template: `
        <div>
            <img class="form__img" src="./img/dog_walking.svg" alt="People and Dog">                        
        </div>
    `
}

const AppForm = {
    name: "AppForm",
    data() {
        return {
            dados: {},
            breed: '',
            font: '',
            color: '',
            name: '',
            img: ''
        }
    },
    created() {
        this.getDados();
    },
    methods: {
        getDados() {
            fetch("https://dog.ceo/api/breeds/list/all")
            .then(res => res.json())
            .then(res => {
                this.dados = res;                            
            })                        
        },
        getPhoto() {
            fetch(`https://dog.ceo/api/breed/${this.breed}/images/random`)
            .then(res => res.json())
            .then(res => {
                this.img = res.message;                            
                this.$emit("data", this.img);
            })
        },
        testes() {
            this.getPhoto();
        }
    },
    template: `
        <div>
            <form class="form__inputs container-fluid py-4">
                <div class="form-group">
                    <label>Escolha uma raça</label>
                    <select class="input__breeds form-control" v-model="breed">
                        <option disabled value="">Selecione uma raça</option>
                        <option v-for="(valor, index) in dados.message"
                                :key="index"
                                :value="index">
                            {{ index }}
                        </option>
                    </select>                                
                </div>
                
                <div class="form-group">
                    <label>Escolha uma fonte</label>
                    <select class="input__font form-control" v-model="font">
                        <option disabled value="">Selecione uma fonte</option>
                        <option value="Anton">Anton</option>
                        <option value="Bangers">Bangers</option>
                        <option value="Chelsea Market">Chelsea Market</option>
                        <option value="Indie Flower">Indie Flower</option>
                        <option value="Roboto">Roboto</option>                                                     
                    </select>                                
                </div>

                <div class="form-group">
                    <label>Escolha uma cor para fonte</label>
                    <select class="input__color form-control" v-model="color">
                        <option disabled value="">Selecione uma cor</option>
                        <option value="red">Vermelho</option>
                        <option value="black">Preto</option>
                        <option value="white">Branco</option>
                        <option value="green">Verde</option>
                        <option value="blue">Azul</option>                                                 
                    </select>                                
                </div>

                <div class="form-group">
                    <input v-model="name"
                           class="input__name form-control"
                           type="text"
                           placeholder="Digite um nome para o DOG!" />
                </div>
                <button @click="testes" type="button" class="btn btn-primary">Salvar</button>
            </form>
        </div>
    `
}

const AppGenerator = {
    name: "AppGenerator",
    data() {
        return {
            date: "",
            hour: ""
        }
    },
    props: ["link", "msg"],
    created() {
        this.getDate();
    },
    methods: {
        getDate() {
            let today = new Date();
            let day = today.getDate();
            let month = today.getMonth();
            let hour = today.getHours();
            let min = today.getMinutes();
            this.date = `${day}/${month}`;
            this.hour = `${hour}:${min}`
        }
    },
    template: `
        <div>
            <div class="generator__img">
                <p>{{ msg }}</p>
                <img :src="link" alt="Dog" />
            </div>

            <div class="generator__info">
                {{ date }} - {{ hour }}
            </div>
        </div>
    `
}

const AppFooter = {
    name: "AppFooter",
    data() {
        return {
            github: 'https://github.com/fogeid',
        }
    },
    template: `
        <div>
            <p class="footer__title">2020 © Developed by <a :href="github" class="footer__title__link">Diego Batista</a></p>
        </div>
    `
}

let app = new Vue({
    el: "#app",
    data: {
        linkImg: '',
        msg: ''
    },           
    components: {
        AppHeader,
        AppImg,
        AppForm,
        AppGenerator,
        AppFooter
    },
    methods: {
        getDados(e) {
            this.linkImg = e;
            this.msg = "Salvo com sucesso!";
        }
    }
});