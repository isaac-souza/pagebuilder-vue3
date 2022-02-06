import { ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'

const groups = ref([
    {
        uuid: uuidv4(),
        title: 'Heroes',
        blocks: [
            {
                uuid: uuidv4(),
                type: 'hero',
                model: 'image-left',
                componentName: 'HeroImageLeft',
                optionsComponentName: 'HeroImageLeftOptions',
                description: 'Image left',
                thumbUrl: '/images/thumbs/v1/heroes/image-right.png',
                data: {
                    darkMode: false,
                    title: 'Compeling title about your product!!!',
                    subtitle: 'Describe the main benefit you product delivers to your customers.',
                    imageUrl: '/images/samples/v1/heros/cover.png',
                    buttonText: 'Buy NOW!!!',
                    buttonLink: 'https://google.com',
                }
            },
            {
                uuid: uuidv4(),
                type: 'hero',
                model: 'form-left',
                componentName: 'HeroFormLeft',
                optionsComponentName: 'HeroFormLeftOptions',
                description: 'Form left',
                thumbUrl: '/images/thumbs/v1/heroes/form-right.png',
                data: {
                    darkMode: false,
                    title: 'Compeling title about your product!!!',
                    subtitle: 'Describe the main benefit you product delivers to your customers.',
                    buttonText: 'I want a copy!!!',
                }
            },
            {
                uuid: uuidv4(),
                type: 'hero',
                model: 'video-center',
                componentName: 'HeroVideoCenter',
                optionsComponentName: 'HeroVideoCenterOptions',
                description: 'Video center',
                thumbUrl: '/images/thumbs/v1/heroes/video-center.png',
                data: {
                    darkMode: false,
                    title: 'Compeling title about your product!!!',
                    subtitle: 'Describe the main benefit you product delivers to your customers.',
                    youtubeVideoCode: '5DVDewOReoY',
                }
            },
        ]
    },
    {
        uuid: uuidv4(),
        title: 'Features',
        blocks: [
            {
                uuid: uuidv4(),
                type: 'features',
                model: 'grid-3',
                componentName: 'FeaturesGrid3',
                optionsComponentName: 'FeaturesGrid3Options',
                description: 'Grid 3x1',
                thumbUrl: '/images/thumbs/v1/features/grid-3.png',
                data: {
                    darkMode: false,
                    title: 'Main benefits',
                    list: [
                        {
                            uuid: uuidv4(),
                            title: 'Features 1',
                            description: 'Description of features 1 should go here, ideally no more than 50 lines'
                        },
                        {
                            uuid: uuidv4(),
                            title: 'Features 2',
                            description: 'Description of features 1 should go here, ideally no more than 50 lines'
                        },
                        {
                            uuid: uuidv4(),
                            title: 'Features 3',
                            description: 'Description of features 1 should go here, ideally no more than 50 lines'
                        },
                        {
                            uuid: uuidv4(),
                            title: 'Features 4',
                            description: 'Description of features 1 should go here, ideally no more than 50 lines'
                        },
                        {
                            uuid: uuidv4(),
                            title: 'Features 5',
                            description: 'Description of features 1 should go here, ideally no more than 50 lines'
                        },
                    ]
                }
            },
        ]
    },
    {
        uuid: uuidv4(),
        title: 'Authors',
        blocks: [
            {
                uuid: uuidv4(),
                type: 'author',
                model: 'image-left',
                componentName: 'AuthorImageLeft',
                optionsComponentName: 'AuthorImageLeftOptions',
                description: 'Image Left',
                thumbUrl: '/images/thumbs/v1/authors/image-left.png',
                data: {
                    darkMode: false,
                    title: 'About the author',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis provident, itaque doloribus earum nostrum iste nesciunt excepturi neque eius, numquam alias eos, delectus quo illum eaque consequuntur consectetur! Sequi soluta porro, magni possimus a tempore quas rem commodi aut pariatur quaerat natus sunt, nihil voluptate maxime beatae atque assumenda similique!',
                    imageUrl: '/images/samples/v1/authors/sample.jpg'
                }
            },
        ]
    },
    {
        uuid: uuidv4(),
        title: 'Buy',
        blocks: [
            {
                uuid: uuidv4(),
                type: 'buy',
                model: 'simple',
                componentName: 'BuySimple',
                optionsComponentName: 'BuySimpleOptions',
                description: 'Simple',
                thumbUrl: '/images/thumbs/v1/buy/simple.png',
                data: {
                    darkMode: true,
                    title: 'Secure you copy right NOW!',
                    subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, ex.',
                    buttonLink: 'https://google.com',
                    buttonText: 'Buy NOW',
                }
            },
        ]
    },
    {
        uuid: uuidv4(),
        title: 'FAQ',
        blocks: [
            {
                uuid: uuidv4(),
                type: 'faq',
                model: 'list',
                componentName: 'FAQList',
                optionsComponentName: 'FAQListOptions',
                description: 'List',
                thumbUrl: '/images/thumbs/v1/faq/list.png',
                data: {
                    darkMode: false,
                    title: 'Frequently Asked Questions',
                    list: [
                        {
                            uuid: uuidv4(),
                            question: 'Question 1',
                            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit perspiciatis sint enim autem quia minima saepe voluptatum!',
                        },
                        {
                            uuid: uuidv4(),
                            question: 'Question 2',
                            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit perspiciatis sint enim autem quia minima saepe voluptatum!',
                        },
                        {
                            uuid: uuidv4(),
                            question: 'Question 3',
                            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit perspiciatis sint enim autem quia minima saepe voluptatum!',
                        },
                    ]
                }
            },
            {
                uuid: uuidv4(),
                type: 'faq',
                model: 'collapse',
                componentName: 'FAQCollapse',
                optionsComponentName: 'FAQCollapseOptions',
                description: 'Collapse',
                thumbUrl: '/images/thumbs/v1/faq/collapse.png',
                data: {
                    darkMode: false,
                    title: 'Dúvidas mais Frequentes',
                    list: [
                        {
                            uuid: uuidv4(),
                            question: 'Question 1 goes here',
                            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit perspiciatis sint enim autem quia minima saepe voluptatum sit ex quidem neque atque iusto, impedit error? Cumque, obcaecati! Ratione, magni corporis!',
                        },
                        {
                            uuid: uuidv4(),
                            question: 'Question 2 goes here',
                            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit perspiciatis sint enim autem quia minima saepe voluptatum sit ex quidem neque atque iusto, impedit error? Cumque, obcaecati! Ratione, magni corporis!',
                        },
                        {
                            uuid: uuidv4(),
                            question: 'Question 3 goes here',
                            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit perspiciatis sint enim autem quia minima saepe voluptatum sit ex quidem neque atque iusto, impedit error? Cumque, obcaecati! Ratione, magni corporis!',
                        },
                        {
                            uuid: uuidv4(),
                            question: 'Question 4 goes here',
                            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit perspiciatis sint enim autem quia minima saepe voluptatum sit ex quidem neque atque iusto, impedit error? Cumque, obcaecati! Ratione, magni corporis!',
                        },
                        {
                            uuid: uuidv4(),
                            question: 'Question 5 goes here',
                            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit perspiciatis sint enim autem quia minima saepe voluptatum sit ex quidem neque atque iusto, impedit error? Cumque, obcaecati! Ratione, magni corporis!',
                        },
                    ]
                }
            },
        ]
    },
    {
        uuid: uuidv4(),
        title: 'Chapters',
        blocks: [
            {
                uuid: uuidv4(),
                type: 'chapters',
                model: 'collapse',
                componentName: 'ChaptersCollapse',
                optionsComponentName: 'ChaptersCollapseOptions',
                description: 'Collapse',
                thumbUrl: '/images/thumbs/v1/chapters/collapse.png',
                data: {
                    darkMode: false,
                    title: 'The Chapters',
                    imageUrl: '/images/samples/v1/chapters/ebook-cover.png',
                    list: [
                        {
                            uuid: uuidv4(),
                            title: 'Chapter 1 - Lorem ipsum dolor sit amet',
                            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit perspiciatis sint enim autem quia minima saepe voluptatum sit ex quidem neque atque iusto, impedit error? Cumque, obcaecati! Ratione, magni corporis!',
                        },
                        {
                            uuid: uuidv4(),
                            title: 'Chapter 2 - Lorem ipsum dolor sit amet',
                            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit perspiciatis sint enim autem quia minima saepe voluptatum sit ex quidem neque atque iusto, impedit error? Cumque, obcaecati! Ratione, magni corporis!',
                        },
                        {
                            uuid: uuidv4(),
                            title: 'Chapter 3 - Lorem ipsum dolor sit amet',
                            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit perspiciatis sint enim autem quia minima saepe voluptatum sit ex quidem neque atque iusto, impedit error? Cumque, obcaecati! Ratione, magni corporis!',
                        },
                        {
                            uuid: uuidv4(),
                            title: 'Chapter 4 - Lorem ipsum dolor sit amet',
                            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit perspiciatis sint enim autem quia minima saepe voluptatum sit ex quidem neque atque iusto, impedit error? Cumque, obcaecati! Ratione, magni corporis!',
                        },
                        {
                            uuid: uuidv4(),
                            title: 'Chapter 5 - Lorem ipsum dolor sit amet',
                            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit perspiciatis sint enim autem quia minima saepe voluptatum sit ex quidem neque atque iusto, impedit error? Cumque, obcaecati! Ratione, magni corporis!',
                        },
                    ]
                }
            },
        ]
    },
    {
        uuid: uuidv4(),
        title: 'Guarantees',
        blocks: [
            {
                uuid: uuidv4(),
                type: 'guarantee',
                model: '7-days',
                componentName: 'Guarantee7Days',
                optionsComponentName: 'Guarantee7DaysOptions',
                description: '7 Days',
                thumbUrl: '/images/thumbs/v1/guarantee/7-days.png',
                data: {
                    darkMode: false,
                    title: 'Garantia Incondicional de 7 Dias',
                    description: 'Esse ebook é tudo que você precisa para começar a vender online e construir uma renda passiva mensal que trabalha 24h por dia, 7 dias por semana automaticamente enquanto vocẽ dorme.',
                    imageUrl: '/images/samples/v1/guarantee/7-days.png',
                }
            },
            {
                uuid: uuidv4(),
                type: 'guarantee',
                model: '10-days',
                componentName: 'Guarantee10Days',
                optionsComponentName: 'Guarantee10DaysOptions',
                description: '10 Days',
                thumbUrl: '/images/thumbs/v1/guarantee/10-days.png',
                data: {
                    darkMode: false,
                    title: 'Garantia Incondicional de 10 Dias',
                    description: 'Esse ebook é tudo que você precisa para começar a vender online e construir uma renda passiva mensal que trabalha 24h por dia, 10 dias por semana automaticamente enquanto vocẽ dorme.',
                    imageUrl: '/images/samples/v1/guarantee/10-days.png',
                }
            },
            {
                uuid: uuidv4(),
                type: 'guarantee',
                model: '15-days',
                componentName: 'Guarantee15Days',
                optionsComponentName: 'Guarantee15DaysOptions',
                description: '15 Days',
                thumbUrl: '/images/thumbs/v1/guarantee/15-days.png',
                data: {
                    darkMode: false,
                    title: 'Garantia Incondicional de 15 Dias',
                    description: 'Esse ebook é tudo que você precisa para começar a vender online e construir uma renda passiva mensal que trabalha 24h por dia, 15 dias por semana automaticamente enquanto vocẽ dorme.',
                    imageUrl: '/images/samples/v1/guarantee/15-days.png',
                }
            },
            {
                uuid: uuidv4(),
                type: 'guarantee',
                model: '30-days',
                componentName: 'Guarantee30Days',
                optionsComponentName: 'Guarantee30DaysOptions',
                description: '30 Days',
                thumbUrl: '/images/thumbs/v1/guarantee/30-days.png',
                data: {
                    darkMode: false,
                    title: 'Garantia Incondicional de 30 Dias',
                    description: 'Esse ebook é tudo que você precisa para começar a vender online e construir uma renda passiva mensal que trabalha 24h por dia, 30 dias por semana automaticamente enquanto vocẽ dorme.',
                    imageUrl: '/images/samples/v1/guarantee/30-days.png',
                }
            },
        ]
    }
])

export default {
    groups
}
