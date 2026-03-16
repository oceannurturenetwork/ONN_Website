'use client'

import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table"
import {Button} from "@/components/ui/button"
import {DownloadIcon} from "lucide-react"
 

interface ResearchItemType {
  _id: string
  title: string
  authors: string[]
  publishedAt: string
  fileUrl: string
}

export function ResearchTable({research}: {research: ResearchItemType[]}) {
 

  const handleDownload = (url: string) => {
    const link = document.createElement('a')
    link.href = url
    link.download = '' // You can also set a default name if you want
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Authors</TableHead>
            <TableHead>Date Published</TableHead>
            <TableHead>Download</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {research.map((item) => (
            <TableRow key={item._id}>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.authors.join(', ')}</TableCell>
              <TableCell>{new Date(item.publishedAt).toLocaleDateString()}</TableCell>
              <TableCell>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleDownload(item.fileUrl)}
                  className="flex items-center gap-2"
                >
                  <DownloadIcon className="h-4 w-4" />
                  Download
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
