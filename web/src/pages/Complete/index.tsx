import React from 'react';
import './styles.css';
import successCheckIcon from '../../assets/images/icons/success-check-icon.svg';

function Complete() {
    return (
        <div id="page-complete">
            <div id="page-complete-container">
                <img src={successCheckIcon} alt="Success Check Icon"/>
                <h1>Cadastro concluído!</h1>
                <p>
                    Agora você faz parte da plataforma da Proffy.
                    <br />
                    Tenha uma ótima experiência.
                </p>

                <button>Fazer login</button>
            </div>
        </div>
    );
}

export default Complete;