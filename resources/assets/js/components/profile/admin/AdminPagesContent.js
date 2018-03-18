import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

import { urlPath } from '../../path';

import { articles } from '../../data/articles';

export default class AdminPagesContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentArticle: {}
        }
    }

render() {
    // let pageContent = queryString.parse(this.props.location.search);
    // let type = pageContent.type;
    // let subcategorie = pageContent.subcategorie;
    const options = {
        noDataText: 'Pas de données ...',
        printToolBar: true
    };
    const selectRow = {
        mode: 'checkbox', //radio or checkbox
        bgColor: 'rgba(69, 90, 100, 0.5)',
        showOnlySelected: true
      };
    var products = [{
        id: 1,
        name: "Product1",
        price: 120
    }, 
    {
        id: 2,
        name: "Product2",
        price: 80
    }];
    // const farticles = articles.filter(a => a.categorie === "economie")
    // let nba = articles.length();
    // console.log(nba)
    return (
        <div>
            <BootstrapTable 
                data={articles} 
                striped 
                hover 
                insertRow
                deleteRow
                selectRow={ selectRow }
                exportCSV
                csvFileName='table-export'
                printToolBar={true}
                headerStyle={ { background: 'rgba(69, 90, 100, 0.8)', color: 'white' } }
                pagination
                columnFilter 
                search={true}
                searchPlaceholder='Taper pour filtrer...'
                keyField='title'
                // maxHeight="450px" 
                options={ options }
                scrollTop={ 'Bottom' }
                version='4'>
                <TableHeaderColumn dataField='topimg' dataSort>Image</TableHeaderColumn>
                <TableHeaderColumn dataField='title' dataSort>Titre</TableHeaderColumn>
                <TableHeaderColumn dataField='categorie' dataSort>Cateégorie</TableHeaderColumn>
                <TableHeaderColumn dataField='' dataSort>Product Action</TableHeaderColumn>
            </BootstrapTable>
        </div>
    );
}
}

