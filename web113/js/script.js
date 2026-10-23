        alert("Bem-vindo(a) ao meu portfólio!");
        
        const botaoMenu = document.querySelector('.menu-toggle');
        const linksMenu = document.querySelector('.menu-links');

        function fecharMenu() {
            linksMenu.classList.remove('menu-aberto');
            botaoMenu.setAttribute('aria-expanded', 'false');
            botaoMenu.setAttribute('aria-label', 'Abrir menu de navegação');
        }

        botaoMenu.addEventListener('click', () => {
            const aberto = linksMenu.classList.toggle('menu-aberto');
            botaoMenu.setAttribute('aria-expanded', String(aberto));
            botaoMenu.setAttribute('aria-label', aberto ? 'Fechar menu de navegação' : 'Abrir menu de navegação');
        });

        linksMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', fecharMenu);
        });

        document.addEventListener('keydown', evento => {
            if (evento.key === 'Escape') {
                fecharMenu();
                botaoMenu.focus();
            }
        });

        function apresentacao() {
            alert("Olá! Meu nome é Nicolas Rafael e sou estudante de Análise e Desenvolvimento de Sistemas.");
        }

        function alterarTitulo() {
            const nome = prompt("Digite seu nome:");

            if (nome !== null && nome.trim() !== "") {
                document.getElementById("titulo_principal").textContent =
                    "Portfólio Profissional - " + nome.trim();
            }
        }

        function destacarSobre() {
            document.getElementById("sobre").style.backgroundColor = "#FFF3CD";
            document.getElementById("sobre").style.border = "2px solid #FFC107";
            document.getElementById("sobre").style.borderRadius = "10px";
        }

        let clique = 0;

        function contarClique() {
            clique = clique + 1;
            document.getElementById("contador").textContent = clique;
        }

        let temaEscuro = false;
        const estilosOriginais = new Map();

        function modoEscuro() {
            const botao = document.getElementById("botao-tema");
            const elementos = [document.body, ...document.querySelectorAll(".card")];

            temaEscuro = !temaEscuro;

            if (temaEscuro) {
                elementos.forEach(function(elemento) {
                    estilosOriginais.set(elemento, elemento.getAttribute("style"));
                });

                document.body.style.backgroundColor = "#1a1a2e";
                document.body.style.color = "#ffffff";

                document.querySelectorAll(".card").forEach(function(card) {
                    card.style.backgroundColor = "#16213e";
                    card.style.color = "#ffffff";
                    card.style.borderColor = "#0f3460";
                });

                botao.textContent = "Modo Claro";
            } else {
                elementos.forEach(function(elemento) {
                    const estilo = estilosOriginais.get(elemento);

                    if (estilo === null) {
                        elemento.removeAttribute("style");
                    } else {
                        elemento.setAttribute("style", estilo);
                    }
                });

                estilosOriginais.clear();
                botao.textContent = "Modo Escuro";
            }
        }

        window.matchMedia('(min-width: 701px)').addEventListener('change', fecharMenu);