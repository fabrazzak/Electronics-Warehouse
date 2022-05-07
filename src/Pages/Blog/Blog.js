import React from 'react';
import PagesTitle from '../PagesTitle/PagesTitle';
import TopQuantityProduct from '../TopQuantityProduct/TopQuantityProduct';

const Blog = () => {
    return (
        <div className='container py-5'>
            <PagesTitle title="Blog"></PagesTitle>
            <h1 className='text-center pb-3 '>Difference between Node.JS and Javascript</h1>
            <div className="row fs-5 lh-lg ">
                <div className="col-md-6">
                    <p><span className='fw-bold'>NodeJS: </span>
                        NodeJS হল একটি ক্রস-প্ল্যাটফর্ম এবং ওপেনসোর্স জাভাস্ক্রিপ্ট রানটাইম পরিবেশ যা সার্ভার-সাইডে জাভাস্ক্রিপ্ট চালানোর অনুমতি দেয় । Nodejs জাভাস্ক্রিপ্ট কোড ব্রাউজারের বাইরে চালানোর অনুমতি দেয়। Nodejs অনেক মডিউল নিয়ে আসে এবং বেশিরভাগই ওয়েব ডেভেলপমেন্টে ব্যবহৃত হয়।
                    </p>
                </div>
                <div className="col-md-6">
                    <p><span className='fw-bold'>JavaScript: </span>
                        জাভাস্ক্রিপ্ট একটি স্ক্রিপ্টিং ভাষা। এটি বেশিরভাগই JS হিসাবে সংক্ষিপ্ত হয়। এটা বলা যেতে পারে যে জাভাস্ক্রিপ্ট ECMA স্ক্রিপ্টের আপডেট সংস্করণ  ।জাভাস্ক্রিপ্ট একটি উচ্চ-স্তরের প্রোগ্রামিং ভাষা যা ওপস ধারণা ব্যবহার করে তবে এটি প্রোটোটাইপ উত্তরাধিকারের উপর ভিত্তি করে।
                    </p>
                </div>
            </div>
            <h1 className='text-center pb-3 '>When should we use NodeJS and when should we use MongoDB?</h1>
            <div className="row fs-5 lh-lg ">
                <div className="col-md-6">
                    <p><span className='fw-bold'>When should we use Nodejs?</span>
                        যেকোনো প্রকল্পের একটি প্রোগ্রামিং পরিবেশ এবং একটি রানটাইম লাইব্রেরি প্রয়োজন যা আপনাকে মৌলিক প্রোগ্রামিং সরঞ্জাম/সমর্থন প্রদান করে এবং আপনার কোড কম্পাইল এবং/অথবা ব্যাখ্যা করতে পারে । Nodejs হল জাভাস্ক্রিপ্ট প্রোগ্রামিং ভাষার টুল। পাইথন, জাভা, পিএইচপি, সি#, সি++, গো, ইত্যাদির মতো অন্যান্য ভাষার জন্য অন্যান্য অনুরূপ সরঞ্জাম রয়েছে ।সুতরাং, আপনি যদি জাভাস্ক্রিপ্টে কোনো ধরনের স্ট্যান্ড-অ্যালোন প্রোগ্রাম বা সার্ভার লিখতে চান, তাহলে আপনি এর জন্য নোডজ ব্যবহার করতে পারেন।
                    </p>
                </div>
                <div className="col-md-6">
                    <p><span className='fw-bold'>When should we use MongoDB?</span>
                        আপনার অ্যাপ্লিকেশনের যদি ক্রমাগতভাবে ডেটা সঞ্চয় করার ক্ষমতার প্রয়োজন হয় যাতে আপনি দক্ষতার সাথে অনুসন্ধান করতে পারেন বা পরে এটি আপডেট করতে পারেন, তাহলে আপনি সাধারণত কিছু ধরণের ডাটাবেস ব্যবহার করবেন ।এখানে কয়েক ডজন জনপ্রিয় ডাটাবেস রয়েছে। MongoDB এরকম একটি ডাটাবেস। MariaDB, MySql, CouchDB, DynamoDB (AWS-এ), Postgres হল অন্যান্য ডাটাবেসের উদাহরণ।বিভিন্ন ডাটাবেসের বিভিন্ন শক্তি (যে জিনিসগুলি তারা সেরা) এবং সেগুলি ব্যবহার করার বিভিন্ন উপায় রয়েছে তাই আপনি যা করছেন তার জন্য সঠিক/সেরা ডাটাবেস চয়ন করা সম্পূর্ণ ভিন্ন প্রশ্ন।
                        সুতরাং, আপনি যদি সহজে আপনার ডাটা গুলো কোথাও স্টোর করতে চান  এবং পরর্তীতে আপনার ডাটা আপডেট করতে চান তাহনে আপনি MongoDB ব্যবহার করতে পারেন।                    </p>
                </div>
                <h1 className='text-center pb-3 '>What is the purpose of jwt and how does it work?</h1>
                <div className="row fs-5 lh-lg ">
                    <div className="col-md-12">
                        <p><span className='fw-bold'>What is jwt?</span>
                            JSON ওয়েব টোকেন, একটি উন্মুক্ত মান যা দুটি পক্ষের মধ্যে নিরাপত্তা তথ্য ভাগ করতে ব্যবহৃত হয় - একটি ক্লায়েন্ট এবং একটি সার্ভার । প্রতিটি JWT-এ এনকোড করা JSON অবজেক্ট রয়েছে, যার মধ্যে দাবির সেট রয়েছে। JWT একটি ক্রিপ্টোগ্রাফিক অ্যালগরিদম ব্যবহার করে স্বাক্ষর করা হয় যাতে টোকেন ইস্যু করার পরে দাবিগুলি পরিবর্তন করা যায় না।
                        </p>
                        <p><span className='fw-bold'>How JWT Works?</span>
                            JWTs অন্যান্য ওয়েব টোকেন থেকে আলাদা যে তারা দাবির একটি সেট ধারণ করে। দাবি দুটি পক্ষের মধ্যে তথ্য প্রেরণ করতে ব্যবহার করা হয় ।একটি JWT হল একটি স্ট্রিং যা তিনটি অংশ নিয়ে গঠিত, বিন্দু (.) দ্বারা পৃথক করা হয় এবং বেস64 ব্যবহার করে ক্রমিক করা হয়। সবচেয়ে সাধারণ সিরিয়ালাইজেশন ফরম্যাটে, কমপ্যাক্ট সিরিয়ালাইজেশন, JWT এইরকম কিছু দেখায়: xxxxx.yyyyy.zzzzz।
                            একবার ডিকোড করা হলে, আপনি দুটি JSON স্ট্রিং পাবেন:<br></br>
                            ১.The header and the payload.<br></br>
                            ২.The signature.
                            <br></br>
                            The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm.
                            The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.

                            There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others.

                            The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature.
                        </p>
                    </div>
                    
                </div>
                <h1 className='text-center pb-3 '>Difference between SQL and NoSQL?</h1>
                <div className="row fs-5 lh-lg ">
                    <div className="col-md-6">
                        <p><span className='fw-bold'>SQL</span>
                            <ol>
                                <li>These databases have fixed or static or predefined schema. </li>
                                <li>These databases are not suited for hierarchical data storage. </li>
                                <li>These databases are best suited for complex queries .</li>
                                <li>Vertically Scalable .</li>
                                <li>Follows ACID property.</li>
                            </ol>
                        </p>
                    </div>
                    <div className="col-md-6">
                        <p><span className='fw-bold'>NoSQL</span>
                            <ol>
                                <li>They have dynamic schema. </li>
                                <li>hese databases are best suited for hierarchical data storage. </li>
                                <li>These databases are not so good for complex queries. </li>
                                <li>Horizontally scalable. </li>
                                <li>Follows CAP(consistency, availability, partition tolerance).</li>
                            </ol>
                        </p>
                    </div>
                </div>
                </div>
                </div>


           
            );
};

            export default Blog;
