const produtos = {
    doces: [
        {
            title: "Mini Pudim",
            price: "R$5,99",
            img: "https://via.placeholder.com/300",
            ingred: ["Ovo", "Leite Condensado", "Leite", "Essência de Baunilha", "Açucar Refinado"]
        },
        {
            title: "Cupcake",
            price: "R$8,99",
            img: "https://via.placeholder.com/300",
            ingred: ["Manteiga", "Açucar Refinado", "Ovo", "Farinha", "Fermento", "Essência de Baunilha"],
            cobert: ["Creme de leite", "Emulsificante", "Chocolate Branco"]
        },
        {
            title: "Cookie",
            price: "R$4.99",
            img: "https://via.placeholder.com/300",
            ingred: ["Farinha", "Fermento", "Bicarbonato", "Manteiga", "Açucar Refinado", "Açucar demerara", "Amemdoim", "Gotas de Chocolates", "Ovo"]
        },
        {
            title: "Cheesecake",
            price: "R$13,99",
            img: "https://via.placeholder.com/300",
            ingred: ["Biscoito de Maizena", "Manteiga", "Cream Cheese", "Açucar refinado", "Ovo", "Creme de leite", "Essência de Baunilha"],
            cobert: ["Morango", "Açucar Refinado", "Limão"]
        },
        {
            title: "Biscoito Amanteigado (Leite Condensado)",
            price: "R$2,99",
            img: "https://via.placeholder.com/300",
            ingred: ["Manteiga", "Açucar confeitero", "Ovo", "Farinha", "Leite Condensado", "Leite em pó"]
        },
        {
            title: "Biscoito Amanteigado (Limão ou Laranja)",
            price: "R$2,99",
            img: "https://via.placeholder.com/300",
            ingred: ["Manteiga", "Açucar confeitero", "Ovo", "Farinha", "Cascas de Limao ou Laranja"]
        }

    ],

    boxes: [
        {
            title: "Box Degustação",
            price: "R$21,90",
            desc: "Perfeito para provar um pouco de tudo e se apaixonar por cada detalhe",
            img: "https://via.placeholder.com/300",
            items: ["1 Cupcake", "1 Cookie", "3 Biscoitos"]
        },
        {
            title: "Box Clássico",
            price: "R$26,90",
            desc: "Os queridinhos de sempre, reunidos em uma caixa irresistível",
            img: "https://via.placeholder.com/300",
            items: ["1 Cupcake", "2 Cookies", "3 Biscoitos"]
        },
        {
            title: "Box Cheesecake",
            price: "R$36,90",
            desc: "Para os verdadeiros fãs do cheesecake — simples assim",
            img: "https://via.placeholder.com/300",
            items: ["1 Cheesecake", "3 Cookies", "3 Biscoitos"]
        },
        {
            title: "Box Premium",
            price: "R$42,90",
            desc: "Uma seleção refinada para quem quer o melhor, sem abrir mão de nada",
            img: "https://via.placeholder.com/300",
            items: ["3 Cookies", "1 Cheesecake", "2 Biscoitos", "1 Cupcake"]
        },
        {
            title: "Box familia",
            price: "R$49,90",
            desc: "O tamanho ideal para dividir momentos (e doces)",
            img: "https://via.placeholder.com/300",
            items: ["4 Cupcakes", "2 Cookies", "2 Biscoitos"]
        },
        {
            title: "Box J&M Especial",
            price: "R$59,90",
            desc: "Uma combinação única dos nossos favoritos, feita para impressionar",
            img: "https://via.placeholder.com/300",
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
            img: "https://via.placeholder.com/300",
            items: ["1 Cupcake", "1 Cookie", "1 Biscoito"]
        },
        {
            title: "Paraiso do Pudim",
            price: "R$19,90",
            desc: "Para quem acredita que nunca é pudim demais",
            img: "https://via.placeholder.com/300",
            items: ["3 Pudins", "1 Cookie"]
        },
        {
            title: "Combo Explosão Cheesecake",
            price: "R$32,90",
            desc: "Uma explosão de sabor em cada pedaço",
            img: "https://via.placeholder.com/300",
            items: ["1 Cookie", "2 Cheesecakes", "1 Biscoito"]
        },
        {
            title: "Combo Dia dos Cookies",
            price: "R$38,90",
            desc: "Para quem não resiste a um cookie de verdade, em quantidade de respeito",
            img: "https://via.placeholder.com/300",
            items: ["6 Cookies", "4 Biscoitos"]
        },
        {
            title: "Combo Mix dos Sonhos",
            price: "R$44,90",
            desc: "Todos os seus favoritos, em um só combo",
            img: "https://via.placeholder.com/300",
            items: ["2 Cookies", "1 Cheesecake", "2 Cupcakes", "2 Biscoitos"]
        },
        {
            title: "Combo Seleção Premium",
            price: "R$69,90",
            desc: "O melhor dos nossos doces em uma experiência completa",
            img: "https://via.placeholder.com/300",
            items: ["2 Cupcakes", "2 Cookies", "2 Biscoitos", "2 Cheesecakes", "2 Pudins"]

        }
    ]
};