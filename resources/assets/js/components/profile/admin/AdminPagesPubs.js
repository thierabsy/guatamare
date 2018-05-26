import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import moment from 'moment';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

import { urlPath } from '../../path';
import Confirm from '../Confirm';

import { articles } from '../../data/articles';
import AdminArticleSlctedArticle from './AdminArticleSlctedArticle';
import AdminArticlePreview from './AdminArticlePreview';
import AdminAnnonceSelected from './AdminAnnonceSelected';

export default class AdminPagesPubs extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentArticle: {},
            stateArticles: [],
            selectedArticles: [],
            selectedArticle: {},
            spreview: false,
            smodifier: false,
            fermeBtn: false,
            overlay: false
        }
        this.handleSave = this.handleSave.bind(this);
        this.createCustomModalFooter = this.createCustomModalFooter.bind(this);
        // this.createCustomModalBod = this.createCustomModalBod.bind(this);
        this.updateData = this.updateData.bind(this);
        this.Saved = this.Saved.bind(this);
        this.onAddRow = this.onAddRow.bind(this);
        // this.handleRowSelect = this.handleRowSelect.bind(this);
        // this.annuler = this.annuler.bind(this);
        this.fermer = this.fermer.bind(this);
        this.overlayFermer = this.overlayFermer.bind(this);
        this.showPreview = this.showPreview.bind(this);
        this.showModifier = this.showModifier.bind(this);
    }
componentDidMount(){
    // let marticles = 
    // this.setState({
    //     stateArticles: articles.filter(a => a.categorie === this.subcategorie || null)
    // })
    // let data = articles.filter(a => a.categorie === this.state.subcategorie)
    let data = this.props.data
    this.setState({
        stateArticles: data
    })
}
handleSave(save) {
    // Custom your onSave event here,
    // it's not necessary to implement this function if you have no any process before save
    // alert("Insert Modal")
    // console.log('SYTEK', 'This is my custom function for save event');
    save();
    // this.state.stateArticles.push(save)
    // setTimeout(()=> console.log(this.state.stateArticles), 1)
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
getSelectedRowKeys() {
    //Here is your answer
    console.log(this.refs.table.state.selectedRowKeys)
  }
onAddRow(row) {
    //Here is your answer
    // this.state.stateArticles.unshift(row)
    this.setState({
        stateArticles: [
            ...this.state.stateArticles,
            this.state.stateArticles.unshift(row)
        ]
    })
    console.log(row)
    console.log(this.state.stateArticles)
  }
  onRowClick(row) {
    console.log("ROW CLICK", row)
  }
//   handleRowSelect(row) {
//     // console.log("ROW SELECTED", row, isSelected, e)
//     // let article = this.state.selectedArticles.findIndex(x => x.id==row.id)
//     // console.log("ART-FI", article)
//     // if(article === -1){
//     //     this.setState({
//     //         selectedArticles: [
//     //             ...this.state.selectedArticles,
//     //             row
//     //         ]
//     //     })
//     // }else{
//     //     console.log("Already exists!");
//     //     // setTimeout(()=> {
//     //         this.state.selectedArticles.splice(this.state.selectedArticles.indexOf(row), 1)
//     //     // }, 500)
//     // }
//     this.setState({
//         selectedArticle:row
//     })
//   }
//   annuler(){
//     this.setState({
//         selectedArticle: {},
//         overlay: false
//     })
//   }
  fermer(){
    this.setState({
        spreview: "",
        overlay: false
    })
  }
  overlayFermer(){
    this.setState({
        spreview: "",
        overlay: false
    })
  }
  showPreview(id){
    // this.props.search.pushState("serchhhhh");
    this.setState({
        spreview: "Preview",
        overlay: true
    })
  }
  showModifier(){
    this.setState({
        spreview: "Modifier",
        overlay: true
    })
  }
// onAddRow(row) {
//     this.products.push(row);
//     this.setState({
//       stateArticles: this.products
//     });
//   }



render(props) {
    // let pageContent = queryString.parse(this.props.location.search);
    // let type = pageContent.type;
    // let subcategorie = pageContent.subcategorie;
    // console.log("PROPS_hi", )
    // console.log("SUBCAT", this.props.subcategorie)
    // console.log("PAGE", this.props)
    // console.log("PAGE_search", this.props.page.search)
    // console.log("PAGE_ART", this.props.page.Article)
 
    console.log("SEL_ART", this.state.selectedArticle)
    // console.log(this.props.type, this.props.subcategorie)
    // console.log(this.state.stateArticles.categorie.has("Désactivé"))
    // let filtered = this.state.stateArticles.filter(a => a.categorie === "economie")
    // console.log(filtered)
    let datas = this.props.data;
    const status = ['active', 'desactive', 'draft', 'ancien' ];
    const slider = ['non',
                    'sl_main', 
                    'sl_top3', 
                    'sl_top2',  
                    'sl_horizontalArticles', 
                    'sl_topArticles', 
                ];
     
    const options = {
        noDataText: 'Pas de données ...',
        insertModalFooter: this.createCustomModalFooter,
        // insertModalBody: this.createCustomModalBody
        onAddRow: this.onAddRow,
        onRowClick: this.onRowClick,
        insertText: 'Ajouter',
        deleteText: 'Supprimer',
        exportCSVText: 'Export (CSV)'
    };
    const selectRow = {
        mode: 'checkbox', //radio or checkbox
        bgColor: 'rgba(69, 90, 100, 0.5)',
        onSelect:  this.props.handleRowSelect,
        showOnlySelected: true,
        clickToExpand: true,
        clickToSelect: true
      };
      const cellEditProp = {
        mode: 'click',
        blurToSave: true,
      };
    //   const selectRowProp = {
    //     mode: "checkbox",
    //     clickToSelect: true
    //   };
    
    return (
        <div className="SelectedArticle">
            <div className="modifications">
                <button className="btn btn-default btn-large" onClick={() => this.Saved()} >SELECTIONNER UN ARTICLE POUR MODIFICATIONS</button>
            </div>

            { this.props.confirmation && 
                <div>
                    <audio src="confirm.wav" autoPlay={true} loop={true} />
                    <Confirm 
                        yesAction={this.props.updatePub} 
                        noAction={this.props.confirm}  
                        subject={"annonce"}  
                    />
                </div>
            }

            {
                this.state.overlay && <div className="overlayArticle" onClick={() => this.overlayFermer()} />
            }

            {
                Object.keys(this.props.selectedArticle).length !== 0 && 
                <div>
                    <hr />
                    <span className="articleNumero" > Annonce: <b>#{this.props.selectedArticle.id}</b> </span> 
                    <div className="sSldtArticleRow"> 
                        <AdminAnnonceSelected 
                            // page={this.props.page.Article} 
                            sltArt={this.props.selectedArticle} 
                            fermeBtn={this.state.fermeBtn} 
                            annuler={this.props.annuler} 
                            confirm={this.props.confirm} 
                            fermer={this.fermer} 
                            showPreview={this.showPreview} 
                            showModifier={this.showModifier} 
                            spreview={this.state.spreview} 
                            updatePub={this.props.updatePub} 
                            titreChange={this.props.titreChange} 
                            getbd={this.props.getbd} 
                            preview={this.props.preview} 
                            dz={this.props.dz} 
                        />
                    </div>
                </div>
            }
            <hr />
            <BootstrapTable 
                // selectRow={selectRowProp} 
                ref='table'
                data={this.props.pubs} 
                // data={this.state.stateArticles} 
                striped 
                hover 
                insertRow
                deleteRow
                selectRow={ selectRow }
                exportCSV
                csvFileName='table-export.csv'
                printToolBar={true}
                headerStyle={{ background: 'rgba(69, 90, 100, 0.8)', color: 'white' }}
                pagination
                columnFilter 
                search={true}
                searchPlaceholder='Taper pour filtrer...'
                keyField='id'
                // maxHeight="450px" 
                options={ options }
                cellEdit={ cellEditProp }
                scrollTop={ 'Bottom' }
                version='4'>
                <TableHeaderColumn 
                    dataField='id'
                    width='60' 
                    dataSort> #ID
                </TableHeaderColumn>
                <TableHeaderColumn 
                    dataField='type' 
                    dataSort> Type
                </TableHeaderColumn>
                <TableHeaderColumn 
                    dataField='user_id' 
                    dataSort> Annonceur
                </TableHeaderColumn>
                <TableHeaderColumn 
                    dataField='img' 
                    dataSort> Image
                </TableHeaderColumn>
                <TableHeaderColumn 
                    dataField='status'
                    editable={{ type: 'select', options: { values: status }}}
                    // onChange={() => this.updateData()}
                    // hidden // Hide column in table
                    export // Export hidden field
                    dataSort> Status
                </TableHeaderColumn>
                <TableHeaderColumn 
                    dataField='alttext'
                    // editable={{ type: 'select', options: { values: slider }}}
                    // onChange={() => this.updateData()}
                    // hidden // Hide column in table
                    export // Export hidden field
                    dataSort> Alt Text
                </TableHeaderColumn>
                <TableHeaderColumn 
                    dataField='updated_at'
                    // dataFormat={(cell, row)=>(<span>{cell.toString()}</span>)}
                    dataSort> Date
                </TableHeaderColumn>
            </BootstrapTable>
        </div>
    );
}
}
