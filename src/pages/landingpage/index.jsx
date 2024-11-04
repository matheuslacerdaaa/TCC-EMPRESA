import './index.scss';
import { useState } from 'react';

export default function Landingpage() {
  
  const [mobilebtn, setMobilebtn] = useState(false);

  function abrirmenu() {
      setMobilebtn(!mobilebtn);
  }

  
  const icones = mobilebtn ? "fa-times" : "fa-bars" ;

  return (

    


    <div className="Landingpage">

      <header>

        <img src="/assets/images/cabecalho/Logo-preto.webp" />

        <nav>
          <a href="#inicio">Inicio</a>
          <a href="#sobre">Sobre</a>
          <a href="#recursos">Recursos</a>
          <a href="#planos">Planos</a>
        </nav>

        <a href="https://wa.me/5511993296044?text=Olá%21%21%20quero%20mais%20informações
" id='btn_contato' >Contato</a>
        <button id="mobile-btn" onClick={abrirmenu}>
                    <i className={`fa-solid ${icones}`}></i>
        </button>


        <div id="mobile-menu" className={mobilebtn ? 'active' : ''}>
                <ul id="mobile_nav_list">
                    <li className="nav-item">
                        <a href="#inicio">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a href="#menu">Destaques</a>
                    </li>
                    <li className="nav-item">
                        <a href="#sobre">Sobre</a>
                    </li>
                    <li className="nav-item">
                        <a href="#avaliar">Avaliação</a>
                    </li>

                    <a href="" id='btn_contato' >Contato</a>
                </ul>
               
            </div>

      </header>


      <section id='inicio'>

        <div className="text-field">


          <h1>Controle de Custos para <span>Crescimento Sustentável</span></h1>


          <div className="btn">
            <a href="https://wa.me/5511993296044?text=Olá%21%21%20quero%20mais%20informações
" id='btn_contato' >Contato</a>
            <a href="#planos" id='btn_planos' >Planos</a>
          </div>

        </div>

      </section>

      <section id='sobre'>

        <div className="main">

          <div className="left">


            <img src="/assets/images/sobre/sobre.jpg" />

          </div>






          <div className="right">




            <div className="text">
              <div className="text-field">
                <h1>Sobre Nós</h1>
              
                <div className="azul"></div>

                <div className="p-text">
                  <p>
                    Oferecemos soluções personalizadas e de fácil aplicação para auxiliar pequenos empreendedores no gerenciamento eficiente de custos, proporcionando maior controle financeiro e tranquilidade. Nosso objetivo é que você tenha mais tempo e recursos para se concentrar no crescimento do seu negócio, alcançando resultados sustentáveis e maximizando o potencial de sua empresa.</p>

                  <p>
                    A missão é capacitar autônomos e pequenas empresas com soluções práticas de gerenciamento de custos, promovendo eficiência e sustentabilidade para que cresçam com segurança financeira. A visão é ser referência em inovação e confiabilidade no setor de gestão de custos, oferecendo ferramentas que possibilitem um planejamento financeiro preciso e acessível. Os valores incluem o compromisso com a transparência, o respeito pelo cliente, a inovação constante e a simplicidade nas soluções, sempre valorizando o crescimento sustentável de cada negócio atendido.</p>
                </div>
              </div>
            </div>








          </div>

        </div>



      </section>

      <section id='recursos'>



        <div className="divtitulo">
          <div className="titulo">

            <h1>Recursos Essenciais</h1>
            <div className="azul"></div>

            <div className="p-text">
              <p>Descubra Ferramentas Inovadoras para Gerenciar Seus Custos de Forma Eficiente e Impulsionar o Crescimento do Seu Negócio</p>
            </div>


          </div>
        </div>

        <div className="mae">

          <div className="top">

            <div className="card1">

              <div className="azul-claro">
                <img src="/assets/images/recursos/otimize.png" />
              </div>

              <h4>Otimização de Custos</h4>

              <p>Comparações que ajudam a identificar e reduzir despesas desnecessárias, melhorando a saúde financeira.</p>
            </div>
            
            <div className="card2">

              <div className="azul-claro">
                <img src="/assets/images/recursos/analise.png" />
              </div>

              <h4>Análise de Dados</h4>

              <p>Ferramentas para monitorar desempenho e gerar graficos que ajudam na tomada de decisões rápidas.</p>
            </div>
            <div className="card3">

              <div className="azul-claro">
                <img src="/assets/images/recursos/tempo.png" />
              </div>

              <h4>Economia de Tempo</h4>

              <p>Ferramentas que automatizam processos, permitindo que você se concentre no seu negócio.</p>
            </div>


          </div>

          <div className="bottom">

            <div className="card4">

              <div className="azul-claro">
                <img src="/assets/images/recursos/dados.png" />
              </div>

              <h4>Segurança de Dados</h4>

              <p>Proteção robusta para garantir a privacidade das informações.</p>
            </div>
            <div className="card5">

              <div className="azul-claro">
                <img src="/assets/images/recursos/cliente.png" />
              </div>

              <h4>Suporte ao Cliente</h4>

              <p>Atendimento disponível para resolver dúvidas e oferecer assistência de forma rápida.</p>
            </div>
            <div className="card6">

              <div className="azul-claro">
                <img src="/assets/images/recursos/documento.png" />
              </div>

              <h4>Visualização Clara</h4>

              <p>Os dados são apresentados de forma organizada, facilitando a análise rápida das informações.</p>
            </div>


          </div>




        </div>


      </section>


      <section id='valores'>

          <div className="um">
              <p className='numero'>100%</p>
              <p className='texto'>Tempo Economizado</p>
          </div>
          <div className="dois">
              <p className='numero'>+50</p>
              <p className='texto'>Clientes fidelizados</p>
          </div>
          <div className="tres">
              <p className='numero'>100%</p>
              <p className='texto'>Seguro</p>
          </div>


      </section>


      <section id='planos'>

        <div className="divtitulo">
          <div className="titulo">

            <h1>Planos para Você!!</h1>
            <div className="azul"></div>

            <div className="p-text">
              <p>Explore Opções Personalizadas que Atendem às Suas Necessidades e Impulsionam o Crescimento do Seu Negócio</p>
            </div>


          </div>
        </div>


        <div className="mae">

        


          <div className="plano">
           
            <h2>Plano Mensal</h2>
            <h3>Perfeito para pequenas empresas e autônomos</h3>
            <hr />
            <p class="preco">R$499/<span>mês</span></p>

            <ul class="topicos">
              <li>Tabelas detalhadas</li>
              <li>Controle de despesas operacionais</li>
              <li> Gestão e análise de dados</li>
              <li>Suporte especializado para otimização de custos</li>
            </ul>

            <a href="https://wa.me/5511993296044?text=Olá%2C%20queria%20saber%20mais%20informações%20a%20respeito%20do%20plano%20mensal
            ">Contato</a>
          
          </div>

          <div className="plano">
            <h2>Plano Anual</h2>
            <h3>Perfeito para pequenas empresas e autônomos</h3>
            <hr />
            <p class="preco">R$3499/<span>ano</span> </p>
            <ul class="topicos">
              <li>Tabelas detalhadas</li>
              <li>Controle de despesas operacionais</li>
              <li> Gestão e análise de dados</li>
              <li>Suporte especializado para otimização de custos</li>
            </ul>

            <a href="https://wa.me/5511993296044?text=Olá%2C%20queria%20saber%20mais%20informações%20a%20respeito%20do%20plano%20anual
            ">Contato</a>
          
          </div>









        </div>


      </section>

      <footer>

        <div className="main-footer">
            <div className="left-footer">

              <div className="text-field">
              <h1>Sobre nós</h1>

              

                  <p>Soluções de gerenciamento de custos para otimizar finanças de pequenos negócios.</p>

          
            
              </div>

              <div className="icones">
                <a href="https://web.facebook.com/profile.php?id=61568433172407"><img src="/assets/images/rodape/facebook.png"/></a>
                <a href="https://www.instagram.com/skyblue.gc/?igsh=MTNyYmJ1ZDgyaDVrZQ%3D%3D"><img src="/assets/images/rodape/instagram.png"/></a>
                <a href="https://wa.me/5511993296044?text=Olá,%20gostaria%20de%20mais%20informações."><img src="/assets/images/rodape/whatsapp.png"/></a>
              </div>


            </div>

            <div className="right-footer">

              <div className="text-field">
              <h1>Links Rapidos</h1>

              

                <ul>

                      <li><a href="#inicio">Inicio</a></li>
                      <li><a href="#sobre">Sobre</a></li>
                      <li><a href="#recursos">Recursos</a></li>
                      <li><a href="#planos">Planos</a></li>


                </ul>


              </div>

              

            </div>

          


       

     

        </div>
        

        <div className="final">

        

          <p>&copy 2024 Sky Blue</p>


      </div>

       


      </footer>

   


    </div>
  );
}


