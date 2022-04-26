<template>
  	<section>
    	<header class="top_tips">
			<!-- 第几周 -->
    		<span class="num_tip" v-if="fatherComponent ==='home'">{{level}}</span>
				<!-- 第几题 -->
			<span class="num_tip" v-if="fatherComponent ==='item'">题目{{itemNum}}</span>
    	</header>
    	<div v-if="fatherComponent ==='home'">
			<!-- 进入主页 -->
    		<div class="home_logo item_container_style" v-if="fatherComponent ==='home'"></div>
			<router-link to="item" class="start button_style"></router-link>
    	</div>
		<!-- 题目选项部分 -->
    	<div v-if="fatherComponent === 'item'">
    		<div class="item_back item_container_style" v-if="fatherComponent ==='item'">
    			<div class="item_list_container">
					<!-- title -->
    				<header class="item_title">{{itemDetail[itemNum-1].topic_name}}</header>
					<!-- 选项 -->
    				<ul>
    					<li class="item_list" v-for="(item,index) in itemDetail[itemNum - 1].topic_answer" 
						:key="index" @click="choosed(index,item.topic_answer_id)">
    						<span class="option_style" v-bind:class="{'has_choosed': choosedNum === index}">{{chooseType(index)}}</span>
    						<span class="option_detail">{{item.answer_name}}</span>
    					</li>
    				</ul>
    			</div>
    		</div>
			<!-- 提交按钮 -->
    		<span class="next_item button_style" @click="nextItem" v-if="itemNum < itemDetail.length - 1"></span>
    		<span class="submit_item button_style" v-else @click="submitAnswer"></span>
    	</div>
  	</section>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default{
	data(){
		return {
			choosedNum:null, //选中答案的索引
			choosedId:null, //选中答案的ID
		}
	},
	props:['fatherComponent'],
	// 初始化信息
	created(){
		if(this.fatherComponent === 'home'){
			this.initializeData()
		}
	},
	//mapState辅助生成计算属性，当映射的计算属性的名称与 state 的子节点名称相同时，
   // 我们也可以给 mapState 传一个字符串数组。
	computed:mapState([
		'level',  //第几周
		'itemNum', //第几题
		'itemDetail', //题目
	]),
	
	methods:{
		...mapActions([
			'addNum',
			'initializeData'
		]),
		nextItem(){
			console.log('a');
			this.$router.push('/item')
			//点击进入下一题，判断是否选中，如果选中则清空
			if(this.choosedNum !== null){
				this.choosedNum =null
			//保存当前选中的答案，同时索引加一，跳转到下一题
			 this.addNum(this.choosedId)
			//  this.$store.dispatch('addNum',this.choosedId)
			}else {
				alert('您还没有选择答案~')
			}

		},
		// 索引0-3对应答案A-B
		chooseType(type){
			switch(type){
				case 0: return 'A';
				case 1: return 'B';
				case 2: return 'C';
				case 3: return 'D';

			}
		},
		// 选择答案
		choosed(type,id){
			console.log(type);
			this.choosedNum = type
			this.choosedId = id
		},
		//到达最后一题，交卷，请空定时器，跳转分数页面
		submitAnswer(){
			if(this.choosedNum !== null){
				this.addNum(this.choosedId)
				clearInterval(this.timer)
				this.$router.push('score')
			}
			
		}
		
	}
}
</script>

<style lang="less">
	.top_tips{
		position: absolute;
		height: 7.35rem;
		width: 3.25rem;
		top: -1.3rem;
		right: 1.6rem;
		background: url(../images/WechatIMG2.png) no-repeat;
		background-size: 100% 100%;
		z-index: 10;
		.num_tip{
			position: absolute;
			left: 0.48rem;
			bottom: 1.1rem;
			height: 0.7rem;
			width: 2.5rem;
			font-size: 0.6rem;
			font-family: '黑体';
			font-weight: 600;
			color: #a57c50;
			text-align: center;
		}
	}
	.item_container_style{
		height: 11.625rem;
		width: 13.15rem;
		background-repeat: no-repeat;
		position: absolute;
		top: 4.1rem;
		left: 1rem;
	}
	.home_logo{
		background-image: url(../images/1-2.png);
		background-size: 13.142rem 100%;
		background-position: right center;
	}
	.item_back{
		background-image: url(../images/2-1.png);
		background-size: 100% 100%;
	}
	.button_style{
        display: block;
        height: 2.1rem;
        width: 4.35rem;
        background-size: 100% 100%;
        position: absolute;
        top: 16.5rem;
        left: 50%;
        margin-left: -2.4rem;
        background-repeat: no-repeat;
	}
	.start{
        background-image: url(../images/1-4.png);
    }
    .next_item{
    	background-image: url(../images/2-2.png);
    }
    .submit_item{
    	background-image: url(../images/3-1.png);
    }
    .item_list_container{
    	position: absolute;
    	height: 7.0rem;
    	width: 8.0rem;
    	top: 2.4rem;
    	left: 3rem;
		-webkit-font-smoothing: antialiased;
    }
	.item_title{
		font-size: 0.65rem;
		color: rgb(153, 153, 190);
		line-height: 0.7rem;
	}
	.item_list{
		font-size: 0;
		margin-top: 0.4rem;
		width: 10rem;
		span{
			display: inline-block;
			font-size: 0.6rem;
			color: rgba(59, 231, 128, 0.644);
			vertical-align: middle;
		}
		.option_style{
			height: 0.725rem;
			width: 0.725rem;
			border: 1px solid #fff;
			border-radius: 50%;
			line-height: 0.725rem;
			text-align: center;
			margin-right: 0.3rem;
			font-size: 0.5rem;
			font-family: 'Arial';
		}
		.has_choosed{
			background-color: #ffd400;
			color: #575757;
			border-color: #ffd400;
		}
		.option_detail{
			width: 7.5rem;
			padding-top: 0.11rem;
		}
	}
</style>
