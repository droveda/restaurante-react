import styles from './Sobre.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import casa from 'assets/sobre/casa.png';
import massa1 from 'assets/sobre/massa1.png';
import massa2 from 'assets/sobre/massa2.png';

const imagens = [massa1, massa2];

export default function Sobre() {

    return (
        <section>
            <h3 className={stylesTema.titulo}>Sobre</h3>

            <img src={casa} alt='Casa' />
            <div className={styles.sobreNos}>
                
                <div className={styles.sobreNos__texto}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod velit eget nulla aliquam, eget ullamcorper magna efficitur. Cras iaculis dolor eu elit ultrices lacinia. Phasellus eu enim erat. Vivamus eu aliquam nunc. Mauris auctor velit neque, pellentesque venenatis nisi facilisis euismod. Praesent laoreet neque non diam convallis, vitae porttitor purus tincidunt. Curabitur rhoncus feugiat ligula, nec cursus velit bibendum vitae. Sed cursus, nisi a luctus gravida, nibh quam rutrum velit, vel imperdiet dolor urna vitae nulla. Ut pretium, mi at placerat porttitor, sem leo rutrum diam, nec finibus diam ante a nulla. Vivamus eu enim pulvinar, eleifend augue a, interdum elit. Vivamus vitae libero vulputate, commodo magna eget, aliquam dui.
                    </p>

                    <p>
                        Curabitur pulvinar dictum turpis, sed euismod neque gravida sit amet. Sed in dui velit. Maecenas accumsan purus vitae felis interdum pulvinar. Aliquam eu erat dolor. Aliquam nec hendrerit justo. Morbi nisl velit, tempor quis euismod eget, porta eu massa. Nunc bibendum sit amet libero et bibendum. Proin sollicitudin risus non blandit mattis. Nam metus nisl, posuere sed est at, accumsan malesuada erat.
                    </p>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum, leo ac cursus vehicula, eros justo mattis ipsum, et molestie ante odio vitae odio. Integer eleifend nec nisl at commodo. Donec accumsan posuere libero nec gravida. Nullam nec nulla a eros feugiat efficitur nec ac est. Nam scelerisque leo at risus cursus mollis. Praesent lobortis augue id ligula ultricies ullamcorper. Praesent cursus, nisl pretium fermentum porta, ligula quam blandit urna, vitae rutrum ipsum enim ut sapien. Nullam at auctor quam, non molestie augue. Duis ante justo, tincidunt et dignissim ac, sagittis vel turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque sodales urna pharetra, porta mi eu, sollicitudin nisi.
                    </p>
                </div>

            </div>
            <div className={styles.imagens}>
                {imagens.map((imagem, index) => (
                    <div key={index} className={styles.imagens__imagem}>
                        <img src={imagem} alt="imagem de massa" />
                    </div>
                ))}
            </div>
        </section>
    );

}