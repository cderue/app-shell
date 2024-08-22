declare module 'acquisition/PresentationValeur' {
    const PresentationValeur: React.FC<{}>;
    export default PresentationValeur;
}

declare module 'acquisition/CreationProjet' {
    interface CreationProjetProps {
        onSuccessSubmit: () => Promise<void>;
    }

    const CreationProjet: React.FC<CreationProjetProps>;
    export default CreationProjet;
}


declare module 'suivi/SuiviProjet' {
    const SuiviProjet: React.FC<{}>;
    export default SuiviProjet;
}

declare module 'suivi/ListeProjets' {
    const ListeProjets: React.FC<{}>;
    export default ListeProjets;
}

declare module 'suivi/SuiviProduit' {
    const SuiviProduit: React.FC<{}>;
    export default SuiviProduit;
}
