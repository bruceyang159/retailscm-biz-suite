

import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome';
import { connect } from 'dva'
import moment from 'moment'
import BooleanOption from 'components/BooleanOption';
import { Row, Col, Icon, Card, Tabs, Table, Radio, DatePicker, Tooltip, Menu, Dropdown,Badge, Switch,Select,Form,AutoComplete,Modal } from 'antd'
import { Link, Route, Redirect} from 'dva/router'
import numeral from 'numeral'
import {
  ChartCard, yuan, MiniArea, MiniBar, MiniProgress, Field, Bar, Pie, TimelineChart,
} from '../../components/Charts'
import Trend from '../../components/Trend'
import NumberInfo from '../../components/NumberInfo'
import { getTimeDistance } from '../../utils/utils'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import styles from './OriginalVoucherCreation.dashboard.less'
import DescriptionList from '../../components/DescriptionList';
import ImagePreview from '../../components/ImagePreview';
import GlobalComponents from '../../custcomponents';
import DashboardTool from '../../common/Dashboard.tool'
import appLocaleName from '../../common/Locale.tool'

const {aggregateDataset,calcKey, defaultHideCloseTrans,
  defaultImageListOf,defaultSettingListOf,defaultBuildTransferModal,
  defaultExecuteTrans,defaultHandleTransferSearch,defaultShowTransferModel,
  defaultRenderExtraHeader,
  defaultSubListsOf,
  defaultRenderExtraFooter,renderForTimeLine,renderForNumbers,defaultQuickFunctions
}= DashboardTool





const { Description } = DescriptionList;
const { TabPane } = Tabs
const { RangePicker } = DatePicker
const { Option } = Select


const imageList =(originalVoucherCreation)=>{return [
	 ]}

const internalImageListOf = (originalVoucherCreation) =>defaultImageListOf(originalVoucherCreation,imageList)

const optionList =(originalVoucherCreation)=>{return [ 
	]}

const buildTransferModal = defaultBuildTransferModal
const showTransferModel = defaultShowTransferModel
const internalSettingListOf = (originalVoucherCreation) =>defaultSettingListOf(originalVoucherCreation, optionList)
const internalLargeTextOf = (originalVoucherCreation) =>{

	return null
	

}


const internalRenderExtraHeader = defaultRenderExtraHeader

const internalRenderExtraFooter = defaultRenderExtraFooter
const internalSubListsOf = defaultSubListsOf


const internalRenderTitle = (cardsData,targetComponent) =>{
  
  
  const linkComp=cardsData.returnURL?<Link to={cardsData.returnURL}> <FontAwesome name="arrow-left"  /> </Link>:null
  return (<div>{linkComp}{cardsData.cardsName}: {cardsData.displayName}</div>)

}


const internalSummaryOf = (originalVoucherCreation,targetComponent) =>{
	
	
	const {OriginalVoucherCreationService} = GlobalComponents
	const userContext = null
	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{originalVoucherCreation.id}</Description> 
<Description term="谁">{originalVoucherCreation.who}</Description> 
<Description term="评论">{originalVoucherCreation.comments}</Description> 
<Description term="制造日期">{ moment(originalVoucherCreation.makeDate).format('YYYY-MM-DD')}</Description> 
	
        {buildTransferModal(originalVoucherCreation,targetComponent)}
      </DescriptionList>
	)

}

const internalQuickFunctions = defaultQuickFunctions

class OriginalVoucherCreationDashboard extends Component {

 state = {
    transferModalVisiable: false,
    candidateReferenceList: {},
    candidateServiceName:"",
    candidateObjectType:"city",
    targetLocalName:"",
    transferServiceName:"",
    currentValue:"",
    transferTargetParameterName:"",  
    defaultType: 'originalVoucherCreation'


  }
  componentDidMount() {

  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName, originalVoucherListMetaInfo, originalVoucherCount } = this.props.originalVoucherCreation
    if(!this.props.originalVoucherCreation.class){
      return null
    }
    const returnURL = this.props.returnURL
    
    const cardsData = {cardsName:"原始凭证制作",cardsFor: "originalVoucherCreation",
    	cardsSource: this.props.originalVoucherCreation,returnURL,displayName,
  		subItems: [
{name: 'originalVoucherList', displayName:'原始凭证',type:'originalVoucher',count:originalVoucherCount,addFunction: true, role: 'originalVoucher', metaInfo: originalVoucherListMetaInfo},
    
      	],
  	};
    
    const renderExtraHeader = this.props.renderExtraHeader || internalRenderExtraHeader
    const settingListOf = this.props.settingListOf || internalSettingListOf
    const imageListOf = this.props.imageListOf || internalImageListOf
    const subListsOf = this.props.subListsOf || internalSubListsOf
    const largeTextOf = this.props.largeTextOf ||internalLargeTextOf
    const summaryOf = this.props.summaryOf || internalSummaryOf
    const renderTitle = this.props.renderTitle || internalRenderTitle
    const renderExtraFooter = this.props.renderExtraFooter || internalRenderExtraFooter
    const quickFunctions = this.props.quickFunctions || internalQuickFunctions
    return (

      <PageHeaderLayout
        title={renderTitle(cardsData,this)}
        content={summaryOf(cardsData.cardsSource,this)}
        wrapperClassName={styles.advancedForm}
      >
        {quickFunctions(cardsData)} 
        {renderExtraHeader(cardsData.cardsSource)}
        {settingListOf(cardsData.cardsSource)}
        {imageListOf(cardsData.cardsSource)}        
        {largeTextOf(cardsData.cardsSource)}
  
      </PageHeaderLayout>
    )
  }
}

export default connect(state => ({
  originalVoucherCreation: state._originalVoucherCreation,
  returnURL: state.breadcrumb.returnURL,
  
}))(Form.create()(OriginalVoucherCreationDashboard))

