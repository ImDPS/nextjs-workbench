// a resonsive header which has a logo, a search bar, and a user profile dropdown
"use client"

import {useState} from "react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Bell, Cross, Search, X } from "lucide-react"
import { UserButton } from "../user-button"
import { ModeToggle } from "../toggle-theme"

export function Header() {
    const [isSearchVisible, setIsSearchVisible] = useState(false);

    const isAuthenticated = true

    return (
        <header className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
            <img
            src="/images/nextjs.png"
            alt="Next.js Logo"
            width={40}
            height={40}
            />
            
        </div>
        
        {/*  login button if authenticaed or user profile dropdown if authenticated */}

        <div className="flex items-center space-x-4">

            {!isSearchVisible && (
                <Button variant="outline" onClick={() => setIsSearchVisible(true)}>
                    <Search size={20} />
                </Button>
            )}
            {isSearchVisible && (
                        <>
                            <Input type="text" placeholder="Search..." className="w-64" />
                            <Button variant="outline" onClick={() => setIsSearchVisible(false)}>
                                <X size={20} />
                            </Button>
                        </>
                    )}
            
            <Button variant="outline">
                <Bell size={20} />
            </Button>
            <ModeToggle />

            {!isAuthenticated ? (
                
                <Button>Login</Button>
            ) : (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">
                            <UserButton />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )}

        </div>
        
        </header>
    )
    }
