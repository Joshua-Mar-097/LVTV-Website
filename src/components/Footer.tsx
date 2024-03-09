function Footer() {
    return (
        <footer>
            <div className="p-10 bg-yellow-400 text-black">
                <div className="mr-10 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                        <div className="mb-5 ">
                            <h4 className="font-bold text-4xl">LVTV</h4>
                        </div>
                        <div className="mb-5 ml-15">
                            <h4 className="font-bold text-xl pb-4">Useful Links</h4>
                            <ul>
                                <li className="pb-1"><a href="#" className="hover:text-gray-400">Home</a></li>
                                <li className="pb-1"><a href="#" className="hover:text-gray-400">Teleradio</a></li>
                                <li className="pb-1"><a href="#" className="hover:text-gray-400">News</a></li>
                                <li className="pb-1"><a href="#" className="hover:text-gray-400">Our Story</a></li>
                                <li className="pb-1"><a href="#" className="hover:text-gray-400">Archives</a></li>
                            </ul>
                        </div>
                        <div className="mb-5">
                            <h4 className="font-bold text-xl pb-4">Contact Information</h4>
                            <strong>Phone:</strong> 09123456789 <br/>
                            <strong>Email:</strong> lvcc@lvcc.edu.ph <br/>
                            McArthur Highway <br/>
                            Sampaloc, Apalit <br/>
                            Pampanga 2016
                        </div>
                        <div className="mb-5 ">
                            <ul className="mt-5">
                                <li className="pb-3"><a href="#" className="hover:text-gray-400">Terms of Use</a></li>
                                <li className="pb-3"><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-custom text-white px-10">
                <div>
                    <div className="text-center"> 
                        <div>
                            Copyright <strong><span>LVTV</span></strong>. All Rights Reserved
                        </div>
                        <div>
                            Designed by <a href="https://tailwindcss.com/" target = '_blank' className="text-yellow-400">TailwindCss</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;