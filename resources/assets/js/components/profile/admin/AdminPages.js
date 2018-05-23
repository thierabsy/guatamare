import React, {Component} from 'react';
import { NavLink, Link } from 'react-router-dom';
import axios from 'axios';
import { urlPath } from '../../path';

import { adminnavitems } from '../../data/adminnavitems';
import AdminPagesContent from './AdminPagesContent';
import AdminPagesPubs from './AdminPagesPubs';
import Posted from '../Posted';

export class AdminPages extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedArticle: {},
            confirmation: false,
            posted: false,
            error: false,
            imagePreviewUrl: []
        }
        this.handleRowSelect = this.handleRowSelect.bind(this);
        this.annuler = this.annuler.bind(this);
        this.confirm = this.confirm.bind(this);
        this.updateAuteurArticle = this.updateAuteurArticle.bind(this);
        this.titreChange = this.titreChange.bind(this);
        this.getBody = this.getBody.bind(this);
        this.imgLoaded = this.imgLoaded.bind(this);
        this.dropZone = this.dropZone.bind(this);
    }

    titreChange(e){
        this.setState({
            selectedArticle: { 
                ...this.state.selectedArticle,
                [e.target.name]: e.target.value
            }
        })
        // console.log("ROW_CHANGE", this.state.selectedArticle)
    }
    getBody(value){
        this.setState({
            selectedArticle: { 
                ...this.state.selectedArticle,
                articlebody: value
            }
        })
    }
    imgLoaded(e){
        this.setState({
            selectedArticle: { 
                ...this.state.selectedArticle,
                image: e.target.files[0]
            }
        })
    }
   dropZone(files){
       this.setState({
           imagePreviewUrl: files,
           selectedArticle: {
            ...this.state.selectedArticle,
            image: files[0]
           }
       })
   }

    handleRowSelect(row) {
        this.setState({
            selectedArticle: row
        })
      }
    annuler(){
        this.setState({
            selectedArticle: {},
            overlay: false
        })
    }
    confirm(){
        this.setState({
            confirmation: !this.state.confirmation 
        })
    }
     //********** AFTER POST MESSAGE ******//
     successMsg(res){
        this.setState({
            posted: true
        })
        setTimeout(() => {
            this.setState({
                posted: false
            })
        }, 5000)
    }
    failMsg(e){
        this.setState({
            error: true
        })
        setTimeout(() => {
            this.setState({
                error: false
            })
        }, 5000)
    }

    updateAuteurArticle(e){
        e.preventDefault();
        let data = new FormData();
        for(let key in this.state.selectedArticle){
            data.append(key , this.state.selectedArticle[key]);
        }
        let url= urlPath+"/api/data/admin/"+this.state.selectedArticle.id;
        let self = this;
        axios.update(url, data)
            .then((res) => this.successMsg(res))
            .catch((e) => this.failMsg(e))
    }

    render(){
        return (
            <div className="">
                { (this.state.posted || this.state.error) && <Posted error={this.state.error} />}

                {
                    this.props.type === "Pubs" ?
                            <AdminPagesPubs 
                                pubs={this.props.pubs}
                            />
                        :
                        <AdminPagesContent 
                            search={this.props.search} 
                            type={this.props.type} 
                            subcategorie={this.props.subcategorie} 
                            page={this.props.page} 
                            data={this.props.data} 
                            articles={this.props.articles} 
                            handleRowSelect={this.handleRowSelect} 
                            annuler={this.annuler} 
                            confirm={this.confirm} 
                            confirmation={this.state.confirmation} 
                            selectedArticle={this.state.selectedArticle} 
                            updateAuteurArticle={this.updateAuteurArticle} 
                            titreChange={this.titreChange} 
                            getbd={this.getBody} 
                            preview={this.state.imagePreviewUrl[0] && this.state.imagePreviewUrl[0].preview} 
                            dz={this.dropZone} 
                        />
                }
            </div>
        );
    }
}

export default AdminPages;
