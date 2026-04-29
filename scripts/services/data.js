export const produtos = {
    doces: [
        
        {
            title: "Mini Pudim",
            price: "R$5,99",
            img: "images/products/pudim.jpeg",
            desc: "Pequeno no tamanho, gigante no sabor clássico",
            ingred: ["Ovo", "Leite Condensado", "Leite", "Essência de Baunilha", "Açucar Refinado"]
        },
        {
            title: "Cupcake",
            price: "R$8,99",
            img: "images/products/red_cupcake.jpeg",
            desc: "Macio, delicado e com cobertura irresistível",
            ingred: ["Manteiga", "Açucar Refinado", "Ovo", "Farinha", "Fermento", "Essência de Baunilha"],
            cobert: ["Creme de leite", "Emulsificante", "Chocolate Branco"]
        },
        {
            title: "Cookie",
            price: "R$4.99",
            img: "images/products/cookies.jpeg",
            desc: "Crocante por fora, macio por dentro — do jeito perfeito",
            ingred: ["Farinha", "Fermento", "Bicarbonato", "Manteiga", "Açucar Refinado", "Açucar demerara", "Amemdoim", "Gotas de Chocolates", "Ovo"]
        },
        {
            title: "Cheesecake",
            price: "R$13,99",
            img: "images/products/strawberry_cheesecake.jpeg",
            desc: "Cremoso e equilibrado, com toque suave e sofisticado",
            ingred: ["Biscoito de Maizena", "Manteiga", "Cream Cheese", "Açucar refinado", "Ovo", "Creme de leite", "Essência de Baunilha"],
            cobert: ["Morango", "Açucar Refinado", "Limão"]
        },
        {
            title: "Biscoito Amanteigado (Leite Condensado)",
            price: "R$2,99",
            img: "images/products/biscoitos.jpeg",
            desc: "Leve, macio e com aquele sabor que derrete na boca",
            ingred: ["Manteiga", "Açucar confeitero", "Ovo", "Farinha", "Leite Condensado", "Leite em pó"]
        },
        {
            title: "Biscoito Amanteigado (Limão ou Laranja)",
            price: "R$2,99",
            img: "images/products/biscoitos_citricos.jpeg",
            desc: "Refrescante e aromático, com toque cítrico special",
            ingred: ["Manteiga", "Açucar confeitero", "Ovo", "Farinha", "Cascas de Limao ou Laranja"]
        }
        

    ],

    boxes: [
        {
            title: "Box Degustação",
            price: "R$21,90",
            desc: "Perfeito para provar um pouco de tudo e se apaixonar por cada detalhe",
            img: "images/boxes_combos/boxes/box_degustacao.jpeg",
            items: ["1 Cupcake", "1 Cookie", "3 Biscoitos"]
        },
        {
            title: "Box Clássico",
            price: "R$26,90",
            desc: "Os queridinhos de sempre, reunidos em uma caixa irresistível",
            img: "images/boxes_combos/boxes/box_classico.jpeg",
            items: ["1 Cupcake", "2 Cookies", "3 Biscoitos"]
        },
        {
            title: "Box Cheesecake",
            price: "R$36,90",
            desc: "Para os verdadeiros fãs do cheesecake — simples assim",
            img: "images/boxes_combos/boxes/box_cheesecake.jpeg",
            items: ["1 Cheesecake", "3 Cookies", "3 Biscoitos"]
        },
        {
            title: "Box Premium",
            price: "R$42,90",
            desc: "Uma seleção refinada para quem quer o melhor, sem abrir mão de nada",
            img: "images/boxes_combos/boxes/box_premium.jpeg",
            items: ["3 Cookies", "1 Cheesecake", "2 Biscoitos", "1 Cupcake"]
        },
        {
            title: "Box familia",
            price: "R$49,90",
            desc: "O tamanho ideal para dividir momentos (e doces)",
            img: "images/boxes_combos/boxes/box_familia_two.jpeg",
            items: ["4 Cupcakes", "2 Cookies", "2 Biscoitos"]
        },
        {
            title: "Box J&M Especial",
            price: "R$59,90",
            desc: "Uma combinação única dos nossos favoritos, feita para impressionar",
            img: "images/boxes_combos/boxes/box_jem_especial.jpeg",
            items: ["1 Cupcake", "5 Cookies", "5 Biscoitos", "1 Cheesecake"]
        },
        {
            title: "Caixa Presente J&M",
            price: "R$69,90",
            desc: "Um presente para as pessoas realmente importantes",
            img: "https://via.placeholder.com/300",
            items: ["1 Cartão Presente (Pode trocar por qualquer doce)", "2 Cupcakes", "4 Cookies", "6 Biscoitos", "1 Cheesecake" ]
        }

    ],

    combos: [
        {
            title: "Combo Início Perfeito",
            price: "R$13,90",
            desc: "O começo ideal para adoçar o seu dia",
            img: "images/boxes_combos/combos/combo_inicio_perfeito.jpeg",
            items: ["1 Cupcake", "1 Cookie", "1 Biscoito"]
        },
        {
            title: "Paraiso do Pudim",
            price: "R$19,90",
            desc: "Para quem acredita que nunca é pudim demais",
            img: "images/boxes_combos/combos/combo_paraiso_pudim.jpeg",
            items: ["3 Pudins", "1 Cookie"]
        },
        {
            title: "Combo Explosão Cheesecake",
            price: "R$32,90",
            desc: "Uma explosão de sabor em cada pedaço",
            img: "images/boxes_combos/combos/combo_explosao_cheesecake.jpeg",
            items: ["1 Cookie", "2 Cheesecakes", "1 Biscoito"]
        },
        {
            title: "Combo Dia dos Cookies",
            price: "R$38,90",
            desc: "Para quem não resiste a um cookie de verdade, em quantidade de respeito",
            img: "images/boxes_combos/combos/combo_dia_cookies.jpeg",
            items: ["6 Cookies", "4 Biscoitos"]
        },
        {
            title: "Combo Mix dos Sonhos",
            price: "R$44,90",
            desc: "Todos os seus favoritos, em um só combo",
            img: "images/boxes_combos/combos/combo_mix_sonhos.jpeg",
            items: ["2 Cookies", "1 Cheesecake", "2 Cupcakes", "2 Biscoitos"]
        },
        {
            title: "Combo Seleção Premium",
            price: "R$69,90",
            desc: "O melhor dos nossos doces em uma experiência completa",
            img: "images/boxes_combos/combos/combo_selecao_premium.jpeg",
            items: ["2 Cupcakes", "2 Cookies", "2 Biscoitos", "2 Cheesecakes", "2 Pudins"]

        }
    ]
};