'use client'

import { validateTelInput } from '@/utils/validateTelInput'
import React, { useState } from 'react'

function FormRegister() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    field: '',
    source: '',
    linkedin: '',
    discount: '',
  })

  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    const newErrors: { [key: string]: string } = {}

    if (!formData.firstName) newErrors.firstName = 'نام الزامی است'
    if (!formData.lastName) newErrors.lastName = 'نام خانوادگی الزامی است'
    if (!formData.email) newErrors.email = 'ایمیل الزامی است'
    if (!formData.phone) {
    newErrors.phone = 'شماره تلفن الزامی است'
    } else if (!/^\d{11}$/.test(formData.phone)) {
    newErrors.phone = "شماره تلفن باید 11 رقم باشد"
    }
    if (!formData.field) newErrors.field = 'لطفا حوزه فعالیت را انتخاب کنید'
    if (!formData.source) newErrors.source = 'لطفا این فیلد را پر کنید'

    return newErrors
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors = validate()
    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData)
      alert('درخواست شما ثبت شد ✅')
    }
  }

  return (
    <form onSubmit={handleSubmit} className='w-full mt-10 flex items-start justify-stert flex-col gap-5'>
        <div className='w-full flex items-center justify-between px-[33px] sm:px-[67px] mb-5'>
            <p className='text-black font-IRANYekanXNoEn text-[20px] font-bold'>اطلاعات شخصی</p>
            <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.625 0L7.125 4.5L11.675 3.225L12.075 6.3L7.925 6.6L10.65 10.225L7.875 11.7L5.975 7.875L4.3 11.675L1.425 10.225L4.125 6.6L0 6.275L0.475 3.225L4.925 4.5L4.425 0H7.625Z" fill="black"/>
            </svg>
        </div>

        <div className='w-full border-t-2 border-b-2 border-[#00000008] px-[33px] sm:px-[67px]'>
        <div className='w-full outline-2 outline-border'>
            <input
            className={`w-full z-40 relative placeholder:text-[#0000004D] text-black text-[16px] font-IRANYekanXNoEn font-semibold rounded-[20px] px-[22px] py-[17px] focus:border-border ${errors.firstName ? "outline-2 outline-[#FF9797] outline-dashed" : "outline-2 outline-border"}`}
            type="text"
            name="firstName"
            placeholder="نام"
            value={formData.firstName}
            onChange={handleChange}
            />
        </div>
        </div>
        {errors.firstName && <p className='w-full px-[33px] sm:px-[67px] text-start text-[14px] text-[#FF9797] -mt-3.5'>{errors.firstName}</p>}

        <div className='w-full border-t-2 border-b-2 border-[#00000008] px-[33px] sm:px-[67px]'>
        <div className='w-full outline-2 outline-border'>
            <input
            className={`w-full z-40 relative placeholder:text-[#0000004D] text-black text-[16px] font-IRANYekanXNoEn font-semibold rounded-[20px] px-[22px] py-[17px] focus:border-border ${errors.lastName ? "outline-2 outline-[#FF9797] outline-dashed" : "outline-2 outline-border"}`}
            type="text"
            name="lastName"
            placeholder="نام خانوادگی"
            value={formData.lastName}
            onChange={handleChange}
            />
        </div>
        </div>
        {errors.lastName && <p className='w-full px-[33px] sm:px-[67px] text-start text-[14px] text-[#FF9797] -mt-3.5'>{errors.lastName}</p>}

        <div className='w-full border-t-2 border-b-2 border-[#00000008] px-[33px] sm:px-[67px]'>
        <div className='w-full outline-2 outline-border'>
            <input
            className={`w-full z-40 relative placeholder:text-[#0000004D] text-black text-[16px] font-IRANYekanXNoEn font-semibold rounded-[20px] px-[22px] py-[17px] focus:border-border ${errors.email ? "outline-2 outline-[#FF9797] outline-dashed" : "outline-2 outline-border"}`}
            type="email"
            name="email"
            placeholder="ایمیل"
            value={formData.email}
            onChange={handleChange}
            />
        </div>
        </div>
        {errors.email && <p className='w-full px-[33px] sm:px-[67px] text-start text-[14px] text-[#FF9797] -mt-3.5'>{errors.email}</p>}

        <div className='w-full border-t-2 border-b-2 border-[#00000008] px-[33px] sm:px-[67px]'>
        <div className='w-full outline-2 outline-border'>
            <input
            className={`w-full z-40 relative placeholder:text-[#0000004D] text-black text-[16px] font-IRANYekanXNoEn font-semibold rounded-[20px] px-[22px] py-[17px] focus:border-border ${errors.phone ? "outline-2 outline-[#FF9797] outline-dashed" : "outline-2 outline-border"}`}
            type="text"
            name="phone"
            inputMode='numeric'
            onKeyDown={validateTelInput}
            maxLength={11}
            placeholder="شماره تلفن"
            value={formData.phone}
            onChange={handleChange}
            />
        </div>
        </div>
        {errors.phone && <p className='w-full px-[33px] sm:px-[67px] text-start text-[14px] text-[#FF9797] -mt-3.5'>{errors.phone}</p>}

        <div className='w-full border-t-2 border-b-2 border-[#00000008] px-[33px] sm:px-[67px]'>
        <div className='w-full outline-2 outline-border'>
            <select
            className={`w-full z-40 relative placeholder:text-[#0000004D] text-black text-[16px] font-IRANYekanXNoEn font-semibold rounded-[20px] px-[22px] py-[17px] focus:border-border ${errors.field ? "outline-2 outline-[#FF9797] outline-dashed" : "outline-2 outline-border"}`}
            name="field"
            value={formData.field}
            onChange={handleChange}
            >
            <option value="">حوزه ای که داخلش فعالیت میکنی</option>
            <option value="design">طراحی</option>
            <option value="development">برنامه نویسی</option>
            <option value="marketing">مارکتینگ</option>
            </select>
        </div>
        </div>
        {errors.field && <p className='w-full px-[33px] sm:px-[67px] text-start text-[14px] text-[#FF9797] -mt-3.5'>{errors.field}</p>}

        <div className='w-full border-t-2 border-b-2 border-[#00000008] px-[33px] sm:px-[67px]'>
        <div className='w-full outline-2 outline-border'>
            <select
            className={`w-full z-40 relative placeholder:text-[#0000004D] text-black text-[16px] font-IRANYekanXNoEn font-semibold rounded-[20px] px-[22px] py-[17px] focus:border-border ${errors.source ? "outline-2 outline-[#FF9797] outline-dashed" : "outline-2 outline-border"}`}
            name="source"
            value={formData.source}
            onChange={handleChange}
            >
            <option value="">از کجا با دستو آشنا شدی؟</option>
            <option value="design">اینستاگرام</option>
            <option value="development">وبسایت</option>
            <option value="marketing">مارکتینگ</option>
            </select>
        </div>
        </div>
        {errors.source && <p className='w-full px-[33px] sm:px-[67px] text-start text-[14px] text-[#FF9797] -mt-3.5'>{errors.source}</p>}

        <div className='w-full flex items-center justify-between px-[33px] sm:px-[67px] mb-5'>
            <p className='text-black font-IRANYekanXNoEn text-[20px] font-bold'>اکانت لینکدین</p>
            <span className='text-[#00000066] font-IRANYekanXNoEn text-[18px] font-semibold'>
                (اختیاری)
            </span>
        </div>
        <div className='w-full border-t-2 border-b-2 border-[#00000008] px-[33px] sm:px-[67px]'>
        <div className='w-full outline-2 outline-border'>
            <input
            className='w-full placeholder:text-[#0000004D] text-black text-[16px] font-IRANYekanXNoEn font-semibold outline-2 outline-border rounded-[20px] px-[22px] py-[17px] focus:border-border'
            type="url"
            name="linkedin"
            placeholder="https://linkedin.com/in/username"
            value={formData.linkedin}
            onChange={handleChange}
            />
        </div>
        </div>

        <div className='w-full border-t-2 border-b-2 border-[#00000008] px-[33px] sm:px-[67px]'>
        <div className='w-full outline-2 outline-border'>
            <input
            className='w-full placeholder:text-[#0000004D] text-black text-[16px] font-IRANYekanXNoEn font-semibold outline-2 outline-border rounded-[20px] px-[22px] py-[17px] focus:border-border'
            type="text"
            name="discount"
            placeholder="کد تخفیف"
            value={formData.discount}
            onChange={handleChange}
            />
        </div>
        </div>
        <div className='w-full flex items-start justify-start px-[33px] sm:px-[67px] pt-[30px] pb-10'>
            <button type='submit' className='BuyTicketButton'>
                <svg className='z-50' width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.97754 14.2095L11.538 3.98216M5.51178 2.4555L10.1626 1.9935C11.9261 1.81831 13.4564 3.20189 13.4592 4.97409L13.4669 9.89194" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                </svg>
                <p className='text-white font-IRANYekanXNoEn text[20px] font-semibold z-30 relative'>
                    ثبت درخواست
                </p>
            </button>
        </div>
    </form>
  )
}

export default FormRegister