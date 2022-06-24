import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SearchResultsSection from '../../components/SearchResultsSection/SearchResultsSection';
import Spinner from '../../components/Spinner/Spinner';
import { simulateNetworkRequest } from '../../utils/helperFunctions';

export default function SearchHome() {

    const [searchTerm, setSearchTerm] = useState("");

    const [isSearching, setIsSearching] = useState(false);
    const [areResultsFound, setAreResultsFound] = useState(false);

    const [filters, setFilters] = useState([
        "Vegan",
        "Egyptian cuisine",
        "Tomato allergy",
        "Plant based",
        "Gluten free",
    ]);

    const clearFilters = () => {
        setFilters([]);
        setSearchTerm("");
    }


    const handleSearch = () => {
        setIsSearching(true);

        simulateNetworkRequest()
            .then(() => {
                setIsSearching(false);
                setAreResultsFound(true);
            })
    }


    return (
        <div>
            <Container className="mt-3">
                <Row >
                    <Col>
                        <div className="input-group mb-3">
                            <input name="searchTerm" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} type="search" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
                            <button className="btn btn-primary" type="button" id="button-addon2"><i className="bi bi-search" onClick={handleSearch} /></button>
                        </div>

                        <div>
                            <button className="btn btn-light" onClick={clearFilters}>Clear <i className="bi bi-x-circle" /></button>
                        </div>
                    </Col>
                </Row>

                <Row className="mt-3 mb-2">
                    <Col>

                        {filters.map(item => (
                            <span key={item} className="badge bg-primary me-2">{item}</span>
                        ))}


                        <span className="badge bg-danger me-2">Add filter</span>
                    </Col>
                </Row>

                <Row className="mt-3">
                    <Col>

                        {isSearching && <Spinner />}



                        {!isSearching && areResultsFound &&

                            <>
                                {areResultsFound ?
                                    <div className="text-muted">8 results found</div>
                                    :
                                    <div className="text-muted">0 results found</div>
                                }
                                <SearchResultsSection />
                            </>
                        }



                    </Col>
                </Row>


            </Container>
        </div>
    )
}
