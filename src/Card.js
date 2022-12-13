import React from "react"


function Card (props){
     return (
<div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">{props.type.title}</h5>
            <h6 class="card-price text-center">${props.type.price}<span class="period">/month</span></h6>
            <hr/>
            <ul class="fa-ul">
              <li className={props.type.userEnabler?"":"text-muted"}><span class="fa-li"><i className={props.type.userEnabler?"fas fa-check fa-lg":"fas fa-times fa-lg"}></i></span>{props.type.title==="FREE"?<>{props.type.user}</>:<b>{props.type.user}</b>}</li>
              <li className={props.type.storageEnabler?"":"text-muted"}><span class="fa-li"><i className={props.type.storageEnabler?"fas fa-check fa-lg":"fas fa-times fa-lg"}></i></span>{props.type.storage}</li>
              <li className={props.type.publicEnabler?"":"text-muted"}><span class="fa-li"><i className={props.type.publicEnabler?"fas fa-check fa-lg":"fas fa-times fa-lg"}></i></span>{props.type.public}</li>
              <li className={props.type.communityEnabler?"":"text-muted"}><span class="fa-li"><i className={props.type.communityEnabler?"fas fa-check fa-lg":"fas fa-times fa-lg"}></i></span>{props.type.community}</li>
              <li className={props.type.projectsEnabler?"":"text-muted"}><span class="fa-li"><i className={props.type.projectsEnabler?"fas fa-check fa-lg":"fas fa-times fa-lg"}></i></span>{props.type.projects}</li>
              <li className={props.type.supportEnabler?"":"text-muted"}><span class="fa-li"><i className={props.type.supportEnabler?"fas fa-check fa-lg":"fas fa-times fa-lg"}></i></span>{props.type.support}</li>
              <li className={props.type.domainEnabler?"":"text-muted"}><span class="fa-li"><i className={props.type.domainEnabler?"fas fa-check fa-lg":"fas fa-times fa-lg"}></i></span><b>{props.type.domainContent }</b> {props.type.domain}
              </li>
              <li className={props.type.reportsEnabler?"":"text-muted"}><span class="fa-li"><i className={props.type.reportsEnabler?"fas fa-check fa-lg":"fas fa-times fa-lg"}></i></span>{props.type.reports}</li>
            </ul>
            <div class="d-grid">
              <a href="https://www.guvi.in/ide?id=63848801489ea" class="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
)
     
}
export default Card;