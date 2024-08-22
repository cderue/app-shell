import { Header, HeaderName, HeaderNavigation, HeaderMenuItem } from "@carbon/react";
import Link from "next/link";
import React from "react";

const Nav = () => {
    return (
        <Header aria-label="Site navigation">
            <HeaderName as={Link} href="/" prefix="[Micro]">
                Assu
            </HeaderName>
            <HeaderNavigation aria-label="Main navigation">
                <HeaderMenuItem as={Link} href="/presentation-valeur">
                    Notre entreprise
                </HeaderMenuItem>
                <HeaderMenuItem as={Link} href="/creation-projet">
                    Créer un projet
                </HeaderMenuItem>
                <HeaderMenuItem as={Link} href="/suivi-projet">
                    Suivre vos projets
                </HeaderMenuItem>
                <HeaderMenuItem as={Link} href="/suivi-produit">
                    Suivre vos produits
                </HeaderMenuItem>
            </HeaderNavigation>
        </Header>
    );
};

export default Nav;
