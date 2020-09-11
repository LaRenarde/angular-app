'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">my-admin-app documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-d585b231a0e3f304e8c3d1fa6becf0a6"' : 'data-target="#xs-components-links-module-AppModule-d585b231a0e3f304e8c3d1fa6becf0a6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-d585b231a0e3f304e8c3d1fa6becf0a6"' :
                                            'id="xs-components-links-module-AppModule-d585b231a0e3f304e8c3d1fa6becf0a6"' }>
                                            <li class="link">
                                                <a href="components/AccueilComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccueilComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContactComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ContactComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ErrorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ErrorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ServiceComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ServiceComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CustomersModule.html" data-type="entity-link">CustomersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CustomersModule-116d59f0a2c3cd60f2e1dd56c96ac4fa"' : 'data-target="#xs-components-links-module-CustomersModule-116d59f0a2c3cd60f2e1dd56c96ac4fa"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CustomersModule-116d59f0a2c3cd60f2e1dd56c96ac4fa"' :
                                            'id="xs-components-links-module-CustomersModule-116d59f0a2c3cd60f2e1dd56c96ac4fa"' }>
                                            <li class="link">
                                                <a href="components/GestionCustomersComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GestionCustomersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListecustomersComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListecustomersComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CustomersRoutingModule.html" data-type="entity-link">CustomersRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link">UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UsersModule-5db9b3e44837ef6522d7156d79905335"' : 'data-target="#xs-components-links-module-UsersModule-5db9b3e44837ef6522d7156d79905335"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UsersModule-5db9b3e44837ef6522d7156d79905335"' :
                                            'id="xs-components-links-module-UsersModule-5db9b3e44837ef6522d7156d79905335"' }>
                                            <li class="link">
                                                <a href="components/GestionComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GestionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersRoutingModule.html" data-type="entity-link">UsersRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});