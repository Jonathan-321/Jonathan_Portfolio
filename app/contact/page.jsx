"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
    Select, 
    SelectContent, 
    SelectGroup, 
    SelectItem, 
    SelectLabel, 
    SelectTrigger, 
    SelectValue, 
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "(+1) 572 205 5073",
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "jonathan.muhire@eagles.oc.edu",
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Address",
        description: "2501 E memorial Road, Edmond Ok 73013",
    },
];

const Contact = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleServiceChange = (value) => {
        setFormData(prevData => ({
            ...prevData,
            service: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({
                    firstname: '',
                    lastname: '',
                    email: '',
                    phone: '',
                    service: '',
                    message: ''
                });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <motion.section 
            initial={{opacity: 0}} 
            animate={{
                opacity: 1, 
                transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
            }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* form  */}
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h2 className="h3 mb-2 text-accent">Let's Connect!</h2>
                            <p className="text-sm text-white/60 leading-snug mb-3">
                                Have a project in mind or a position to fill? I'm open to exciting collaborations and internship opportunities. Fill out the form below, and I'll respond promptly.
                            </p>
                            {/* input */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input 
                                    type="text" 
                                    name="firstname" 
                                    placeholder="Firstname" 
                                    value={formData.firstname} 
                                    onChange={handleInputChange} 
                                    required 
                                />
                                <Input 
                                    type="text" 
                                    name="lastname" 
                                    placeholder="Lastname" 
                                    value={formData.lastname} 
                                    onChange={handleInputChange} 
                                    required 
                                />
                                <Input 
                                    type="email" 
                                    name="email" 
                                    placeholder="Email address" 
                                    value={formData.email} 
                                    onChange={handleInputChange} 
                                    required 
                                />
                                <Input 
                                    type="tel" 
                                    name="phone" 
                                    placeholder="Phone number" 
                                    value={formData.phone} 
                                    onChange={handleInputChange} 
                                    required 
                                />
                            </div>
                            {/* select */}
                            <Select name="service" onValueChange={handleServiceChange} value={formData.service}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a service"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a service</SelectLabel>
                                        <SelectItem value="web">Web Development</SelectItem>
                                        <SelectItem value="ui">Internship Opportunity</SelectItem>
                                        <SelectItem value="logo">Other</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {/* textarea */}
                            <Textarea 
                                className="h-[200px]" 
                                name="message"
                                placeholder="Type your message here"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                            />
                            {/* btn */}
                            <Button type="submit" size="md" className="max-w-40" disabled={isSubmitting}>
                                {isSubmitting ? 'Sending...' : 'Send message'}
                            </Button>
                            {submitStatus === 'success' && (
                                <p className="text-green-500">Message sent successfully!</p>
                            )}
                            {submitStatus === 'error' && (
                                <p className="text-red-500">Error sending message. Please try again.</p>
                            )}
                        </form>
                    </div>
                    {/* info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => {
                                return (
                                    <li key={index} className="flex items-center gap-6">
                                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                            <div className="text-[28px]">{item.icon}</div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white/60">{item.title}</p>
                                            <h3 className="text-xl">{item.description}</h3>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;