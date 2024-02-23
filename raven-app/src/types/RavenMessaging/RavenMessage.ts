
export interface RavenMessage {
	creation: string
	name: string
	modified: string
	owner: string
	modified_by: string
	docstatus: 0 | 1 | 2
	parent?: string
	parentfield?: string
	parenttype?: string
	idx?: number
	/**	Channel ID : Link - Raven Channel	*/
	channel_id: string
	/**	Text : Long Text	*/
	text?: string
	/**	JSON : JSON	*/
	json?: any
	/**	Message Reactions : JSON	*/
	message_reactions?: any
	/**	Is Reply : Check	*/
	is_reply?: 0 | 1
	/**	Replied Message ID : Link - Raven Message	*/
	linked_message?: string
	/**	Replied Message Details : JSON	*/
	replied_message_details?: any
	/**	Message Type : Select	*/
	message_type?: "Text" | "Image" | "File"
	/**	Content : Long Text	*/
	content?: string
	/**	File : Attach	*/
	file?: string
	/**	Image Width : Data	*/
	image_width?: string
	/**	Image Height : Data	*/
	image_height?: string
	/**	File Thumbnail : Attach	*/
	file_thumbnail?: string
	/**	Thumbnail Width : Data	*/
	thumbnail_width?: string
	/**	Thumbnail Height : Data	*/
	thumbnail_height?: string
	/**	Link Doctype : Link - DocType	*/
	link_doctype?: string
	/**	Link Document : Dynamic Link	*/
	link_document?: string
	/**	Is Edited : Check	*/
	is_edited?: 0 | 1
}