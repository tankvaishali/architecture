import { Plus } from 'lucide-react'
import React from 'react'

function Footer() {
    return (
        <div>

            <div class="container my-4">
                <div class="accordion row text-center" id="footerAccordion">

                    <div class="accordion-item border-0 col-md-3 col-12">
                        <h2 class="accordion-header" id="headingEmail">
                            <button class="accordion-button text-lg fw-normal bg-white text-center" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEmail" aria-expanded="true" aria-controls="collapseEmail">
                                EMAIL <Plus className='mx-3' width={16} height={16} />
                            </button>
                        </h2>
                        <div id="collapseEmail" class="accordion-collapse collapse" aria-labelledby="headingEmail" data-bs-parent="#footerAccordion">
                            <div class="accordion-body">
                                <div class="list-group">

                                    <div class="d-flex justify-content-between">
                                        <span class="text-secondary small">NEW PROJECTS</span>
                                        <a href="mailto:newbiz@big.dk" class="text-primary small">newbiz@big.dk</a>
                                    </div>
                                    <div class="d-flex justify-content-between">
                                        <span class="text-secondary small">PRESS</span>
                                        <a href="mailto:press@big.dk" class="text-primary small">press@big.dk</a>
                                    </div>
                                    <div class="d-flex justify-content-between">
                                        <span class="text-secondary small">LECTURES</span>
                                        <a href="mailto:lectures@big.dk" class="text-primary small">lectures@big.dk</a>
                                    </div>
                                    <div class="d-flex justify-content-between">
                                        <span class="text-secondary small">EXHIBITIONS</span>
                                        <a href="mailto:exhibitions@big.dk" class="text-primary small">exhibitions@big.dk</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item border-0 col-md-3 col-12">
                        <h2 class="accordion-header" id="headingOffices">
                            <button class="accordion-button collapsed text-lg fw-normal bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOffices" aria-expanded="false" aria-controls="collapseOffices">
                                OFFICES <Plus className='mx-3' width={16} height={16} />
                            </button>
                        </h2>
                        <div id="collapseOffices" class="accordion-collapse collapse" aria-labelledby="headingOffices" data-bs-parent="#footerAccordion">
                            <div class="accordion-body">
                                Office information goes here.
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item border-0 col-md-3 col-12">
                        <h2 class="accordion-header" id="headingSocial">
                            <button class="accordion-button collapsed text-lg fw-normal bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSocial" aria-expanded="false" aria-controls="collapseSocial">
                                SOCIAL <Plus className='mx-3' width={16} height={16} />
                            </button>
                        </h2>
                        <div id="collapseSocial" class="accordion-collapse collapse" aria-labelledby="headingSocial" data-bs-parent="#footerAccordion">
                            <div class="accordion-body">
                                Social media links go here.
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item border-0 col-md-3 col-12">
                        <h2 class="accordion-header" id="headingLegal">
                            <button class="accordion-button collapsed text-lg fw-normal bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseLegal" aria-expanded="false" aria-controls="collapseLegal">
                                LEGAL <Plus className='mx-3' width={16} height={16} />
                            </button>
                        </h2>
                        <div id="collapseLegal" class="accordion-collapse collapse" aria-labelledby="headingLegal" data-bs-parent="#footerAccordion">
                            <div class="accordion-body">
                                Legal information goes here.
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Footer