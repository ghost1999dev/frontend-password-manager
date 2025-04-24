"use client";
import { Element } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { Copy, MoreHorizontal, User } from "lucide-react";
import { toast } from "sonner";
import { DropdownMenu, DropdownMenuTrigger,DropdownMenuContent, DropdownMenuLabel, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { Button } from "@/components/ui/button";
import { Dialog } from "@radix-ui/react-dialog";
import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";

export type ColumnProps = Element;

export const columns: ColumnDef<ColumnProps>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "typeElement",
    header: "Type Element",
  },
  {
    accessorKey: "urlWebsite",
    header: "Url Website",
  },
  {
    accessorKey: "directory",
    header: "Directory",
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const password = row.original.password;
      const username = row.original.username;
      const idPassword = row.original.id
      console.log('Username from ' + idPassword);
      

      const onEditElement = () => {
        window.location.href=`/element/${row.original.id}`
      };
      const copyItemClipBoard = (item: string, name: string) => {
        navigator.clipboard.writeText(item);
        toast.success(`${name} copied `);
      };
      return (
        <div className="flex gap-2 justify-content items-center">
          {password && (
            <Copy
              className="w-4 h-4 cursor-pointer"
              onClick={() => copyItemClipBoard(password, "Password")}
            />
          )}
          {username && (
            <User
              className="w-4 h-4 cursor-pointer"
              onClick={() => copyItemClipBoard(username, "Username")}
            />
          )}
          <Dialog>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open Menu</span>
                        <MoreHorizontal className="h-4 w-4"/>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem
                     onClick={onEditElement
                     }
                    >Edit</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
          </Dialog>
        </div>
      );
    },
  },
];
