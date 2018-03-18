import React from 'react';

const Auteuralertes = () => {
        return (
            <div className="nosalertes">
                <div className="alert alert-info" role="alert">
                    <div className="text-center">
                        <i className="fas fa-info lead"></i>
                        <h4 className="lead"><strong>Processus de publication des articles</strong></h4>
                    </div>
                    <p>
                        Les articles postés ne seront publiés qu'après une revue journalières des articles postés.
                        Cette revue est faite quotidiennement entre 17h et 20h par notre comité de rédaction. Une fois
                        approuvée, un message sera envoyé à l'auteur pour lui faire part des corrections nécessaires 
                        et de la date de publication de son article.
                    </p>
                </div>
                <div className="alert alert-danger" role="alert">
                    <div className="text-center">
                        <i className="fas fa-exclamation-triangle lead"></i>
                        <h4 className="lead"><strong>Attention</strong></h4>
                    </div>
                    <p>
                        Conformemment à l'accord de principe signé avec notre site, nous supprimerons tout article 
                        faisant l'objet de <strong>plagiat</strong> ou des <strong>images nécessitant des droits d'auteur</strong>. <br />
                        L'auteur de cet article se verrait <strong>l'accès refusé à son compte</strong> ou la <strong>suppression de son compte</strong> d'auteur sur notre site.
                        Nous vous remercions de votre compréhension et de votre apport inestimable!
                    </p>
                </div>
            </div>
        );
    }

export default Auteuralertes;
