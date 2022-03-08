import SidebarItem from "./SidebarItem"
import items from "../data/sidebar.json"


export default function Sidebar(){
    return (
        <div className="sidebar">
          { items.map((item, index) => <SidebarItem key={index} item={item} />) }
        </div>
    )
}