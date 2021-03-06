
<%@ page language="java" contentType="text/plain; charset=utf-8"%>
<%@ page isELIgnored="false"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="sky" tagdir="/tags"%>
<fmt:setLocale value="zh_CN"/>
<c:set var="ignoreListAccessControl" value="${true}"/>


<c:if test="${not empty goodsSupplier}">

<div class="col-xs-12 col-ms-4 col-md-3 action-section" >
	<b title="A GoodsSupplier" style="color: green">${userContext.localeMap['goods_supplier']}</b>
	<hr/>
	<ul>
	
	
	<li><span>${userContext.localeMap['goods_supplier.id']}</span> ${goodsSupplier.id}</li>
<li><span>${userContext.localeMap['goods_supplier.name']}</span> ${goodsSupplier.name}</li>
<li><span>${userContext.localeMap['goods_supplier.supply_product']}</span> ${goodsSupplier.supplyProduct}</li>
<li><span>${userContext.localeMap['goods_supplier.contact_number']}</span> ${goodsSupplier.maskedContactNumber}</li>
<li><span>${userContext.localeMap['goods_supplier.description']}</span> ${goodsSupplier.description}</li>
<li><span>${userContext.localeMap['goods_supplier.last_update_time']}</span> <fmt:formatDate pattern="yyyy-MM-dd" value="${goodsSupplier.lastUpdateTime}" /></li>

	
	</ul>
</div>



</c:if>


