'use client'
import Button from "@mui/joy/Button";
import Link from "next/link";
import pageStyle from'./page.module.css'
import {useState} from "react";
import {Input} from "@mui/joy";

const openSearchPage=(value)=>{
    return `/home/page?value=${value}`
}

const validateInputValue=(event,value)=>{
    if (value===''){
        event.stopPropagation()
        event.preventDefault()
    }
}

const SearchInput=()=>{
    const[data,setData]=useState({inputValue:''})
    return <Input
        type="text"
        required
        value={data.inputValue}
        placeholder="输入商品名称"
        onChange={
        (event)=>
            setData({inputValue:event.target.value})
        }
        endDecorator={
            <Button onClick={(event)=>validateInputValue(event,data.inputValue)}>
                <Link href={openSearchPage(data.inputValue)}>搜索</Link>
            </Button>
        }
        >

    </Input>
}
export default function Home() {
    return <div className={pageStyle.wrapper}>
        <SearchInput/>
    </div>;
}
