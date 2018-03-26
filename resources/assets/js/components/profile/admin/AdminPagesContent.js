import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import moment from 'moment';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

import { urlPath } from '../../path';

import { articles } from '../../data/articles';

export default class AdminPagesContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentArticle: {},
            stateArticles: []
        }
        this.handleSave = this.handleSave.bind(this);
        this.createCustomModalFooter = this.createCustomModalFooter.bind(this);
        // this.createCustomModalBod = this.createCustomModalBod.bind(this);
        this.updateData = this.updateData.bind(this);
        this.Saved = this.Saved.bind(this);
    }
componentDidMount(){
    this.setState({
        stateArticles: articles
    })
}
handleSave(save) {
    // Custom your onSave event here,
    // it's not necessary to implement this function if you have no any process before save
    alert("Insert Modal")
    console.log('SYTEK', 'This is my custom function for save event');
    save();
    }
updateData() {
    this.props.onUpdate(console.log("DATA CHANGED"));
    }
createCustomModalFooter(closeModal, save){
    return (
        <InsertModalFooter
            className='my-custom-class'
            saveBtnText='ENREGISTRER'
            closeBtnText='FERMER'
            closeBtnContextual='btn-warning'
            saveBtnContextual='btn-success'
            closeBtnClass='my-close-btn-class'
            saveBtnClass='my-save-btn-class'
            // beforeClose={ this.beforeClose }
            // beforeSave={ this.beforeSave }
            // onModalClose={ () => this.handleModalClose(closeModal) }
            onSave={ () => this.handleSave(save) }
        />
    );
}
// createCustomModalBod(columns, validateState, ignoreEditable){
//     return (
//       <MyCustomBody columns={ columns }
//         validateState={ validateState }
//         ignoreEditable={ ignoreEditable }/>
//     );
//   }
Saved(){
    console.log(this.state.stateArticles[0])
}
render() {
    // let pageContent = queryString.parse(this.props.location.search);
    // let type = pageContent.type;
    // let subcategorie = pageContent.subcategorie;
    console.log(this.state.stateArticles)
    // console.log(this.state.stateArticles.categorie.has("Désactivé"))
    
    const status = [ 'Activé', 'Désactivé', 'Draft', 'Ancien' ];
     
    const options = {
        noDataText: 'Pas de données ...',
        insertModalFooter: this.createCustomModalFooter,
        // insertModalBody: this.createCustomModalBody
    };
    const selectRow = {
        mode: 'checkbox', //radio or checkbox
        bgColor: 'rgba(69, 90, 100, 0.5)',
        showOnlySelected: true
      };
      const cellEditProp = {
        mode: 'click'
      };
    return (
        <div>
            <div className="modifications">
                <button className="btn btn-default btn-large" onClick={() => this.Saved()} >ENREGISTRER LES MODIFICATIONS</button>
            </div>
            <hr />
            <BootstrapTable 
                data={this.state.stateArticles} 
                striped 
                hover 
                insertRow
                deleteRow
                selectRow={ selectRow }
                exportCSV
                csvFileName='table-export'
                printToolBar={true}
                headerStyle={{ background: 'rgba(69, 90, 100, 0.8)', color: 'white' }}
                pagination
                columnFilter 
                search={true}
                searchPlaceholder='Taper pour filtrer...'
                keyField='title'
                // maxHeight="450px" 
                options={ options }
                cellEdit={ cellEditProp }
                scrollTop={ 'Bottom' }
                version='4'>
                <TableHeaderColumn 
                    dataField='title' 
                    dataSort> Titre
                </TableHeaderColumn>
                <TableHeaderColumn 
                    dataField='topimg' 
                    dataSort> Image
                </TableHeaderColumn>
                {/* <TableHeaderColumn 
                    dataField='categorie' 
                    dataSort> Catégorie
                </TableHeaderColumn> */}
                <TableHeaderColumn 
                    dataField='categorie'
                    editable={{ type: 'select', options: { values: status }}}
                    // onChange={() => this.updateData()}
                    dataSort> Status
                </TableHeaderColumn>
                {/* <TableHeaderColumn 
                    dataField=''
                    editable={ { type: 'checkbox', options: { values: 'Y:N' } } }
                    dataSort> Action
                </TableHeaderColumn> */}
            </BootstrapTable>
        </div>
    );
}
}

