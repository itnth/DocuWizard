<template>
    <a-tabs v-model:activeKey="activeKey" class="p-2">
        <a-tab-pane key="1">
            <template #tab>
                <span>
                    <FormOutlined />
                    Trình soạn thảo
                </span>
            </template>
            <main id="sample">
                <Editor v-model="doc" :init="editorInit" />
            </main>
        </a-tab-pane>
        <a-tab-pane key="2">
            <template #tab>
                <span>
                    <SolutionOutlined />
                    Giới thiệu
                </span>
            </template>
            <h1 class="text-5xl align-middle text-center font-bold	text-slate-500">TinyMCE Core full feature list</h1>
            <a-divider orientation="left">Tất cả các tính năng</a-divider>
            <div style="background-color: #ececec" class="p-10">
                <a-row :gutter="16">
                    <a-col :span="8">
                        <a-card class="m-2 h-48" title="Accordion" :bordered="false">
                            <p>Accordion Chuyển đổi nội dung dài thành các khối có thể thu gọn</p>
                        </a-card>
                    </a-col>
                    <a-col :span="8">
                        <a-card class="m-2 h-48" title="Advanced List" :bordered="false">
                            <p>Mở rộng các điều khiển thanh công cụ bullist và numlist bằng cách thêm các định dạng số và
                                loại dấu đầu dòng kiểu danh sách CSS.</p>
                        </a-card>
                    </a-col>
                    <a-col :span="8">
                        <a-card class="m-2 h-48" title="Anchor" :bordered="false">
                            <p>Thêm nút neo/dấu trang vào thanh công cụ để chèn neo vào điểm chèn con trỏ của trình chỉnh
                                sửa.</p>
                        </a-card>
                    </a-col>
                    <a-col :span="8">
                        <a-card class="m-2 h-48" title="Autolink" :bordered="false">
                            <p>Tự động tạo siêu liên kết khi người dùng nhập URL hợp lệ và đầy đủ.</p>
                        </a-card>
                    </a-col>
                    <a-col :span="8">
                        <a-card class="m-2 h-48" title="Autoresize" :bordered="false">
                            <p>Tự động thay đổi kích thước trình chỉnh sửa theo nội dung bên trong nó và ngăn trình chỉnh
                                sửa mở rộng vô hạn.</p>
                        </a-card>
                    </a-col>
                    <a-col :span="8">
                        <a-card class="m-2 h-48" title="Autosave" :bordered="false">
                            <p>Cảnh báo người dùng nếu sửa đổi nội dung chưa được lưu. Bao gồm chức năng "Khôi phục bản nháp
                                cuối cùng".</p>
                        </a-card>
                    </a-col>
                    <a-col :span="8">
                        <a-card class="m-2 h-48" title="Character Map" :bordered="false">
                            <p>Thêm hộp thoại vào trình chỉnh sửa với bản đồ các ký tự unicode đặc biệt không thể thêm trực
                                tiếp từ bàn phím.".</p>
                        </a-card>
                    </a-col>
                    <a-col :span="8">
                        <a-card class="m-2 h-48" title="Code" :bordered="false">
                            <p>Thêm nút thanh công cụ cho phép người dùng chỉnh sửa mã HTML bị ẩn bởi chế độ xem WYSIWYG.
                            </p>
                        </a-card>
                    </a-col>
                    <a-col :span="8">
                        <a-card class="m-2 h-48" title="Code Sample" :bordered="false">
                            <p>Chèn và nhúng các đoạn mã được tô sáng màu cú pháp vào vùng có thể chỉnh sửa.</p>
                        </a-card>
                    </a-col>
                    <a-col :span="8">
                        <a-card class="m-2 h-48" title="Color Picker" :bordered="false">
                            <p>Công cụ chọn màu trực quan hiện là một phần của lõi trình soạn thảo trong TinyMCE 5.</p>
                        </a-card>
                    </a-col>
                    <a-col :span="8">
                        <a-card class="m-2 h-48" title="Context Menu" :bordered="false">
                            <p>Thêm menu ngữ cảnh nhấp chuột phải có thể định cấu hình hiện là một phần của lõi trình soạn
                                thảo trong TinyMCE 5.</p>
                        </a-card>
                    </a-col>
                    <a-col :span="8">
                        <a-card class="m-2 h-48" title="Directionality" :bordered="false">
                            <p>Thêm các điều khiển định hướng vào thanh công cụ và kích hoạt TinyMCE để xử lý tốt hơn các
                                ngôn ngữ được viết từ phải sang trái.</p>
                        </a-card>
                    </a-col>
                    <a-col :span="8">
                        <a-card class="m-2 h-48" title="Emoticons" :bordered="false">
                            <p>Chèn biểu tượng cảm xúc vào vùng có thể chỉnh sửa của TinyMCE. Bộ biểu tượng cảm xúc mặc định
                                có thể được mở rộng hoặc ghi đè.</p>
                        </a-card>
                    </a-col>
                    <a-col :span="8">
                        <a-card class="m-2 h-48" title="Full Screen" :bordered="false">
                            <p>Bật khả năng cho khu vực có thể chỉnh sửa lấp đầy khung nhìn của trình duyệt.</p>
                        </a-card>
                    </a-col>
                    <a-col :span="8">
                        <a-card class="m-2 h-48" title="Help" :bordered="false">
                            <p>Thêm nút và/hoặc mục menu hiển thị các phím tắt tiện dụng cũng như các plugin đã cài đặt.</p>
                        </a-card>
                    </a-col>
                    <a-col :span="8">
                        <a-card class="m-2 h-48" title="Horizontal Rule" :bordered="false">
                            <p>Cho phép người dùng chèn thước ngang trên trang tại điểm chèn con trỏ.</p>
                        </a-card>
                    </a-col>
                    <a-col :span="8">
                        <a-card class="m-2 h-48" title="Image" :bordered="false">
                            <p>Cho phép người dùng chèn hình ảnh vào vùng có thể chỉnh sửa với nhiều tùy chọn tùy chỉnh.</p>
                        </a-card>
                    </a-col>
                    <a-col :span="8">
                        <a-card class="m-2 h-48" title="Import CSS" :bordered="false">
                            <p>Thêm khả năng tự động nhập các lớp CSS từ tệp CSS được chỉ định trong</p>
                        </a-card>
                    </a-col>
                    <a-col :span="8">
                        <a-card class="m-2 h-48" title="Insert Date/Time" :bordered="false">
                            <p>Chèn ngày và/hoặc giờ hiện tại vào vùng có thể chỉnh sửa tại điểm chèn con trỏ.</p>
                        </a-card>
                    </a-col>
                    <a-col :span="8">
                        <a-card class="m-2 h-48" title="Link" :bordered="false">
                            <p>Cho phép người dùng liên kết văn bản đã chọn trong tài liệu của họ với các tài nguyên bên
                                ngoài như URL của trang web.</p>
                        </a-card>
                    </a-col>
                    <a-col :span="8">
                        <a-card class="m-2 h-48" title="Lists" :bordered="false">
                            <p>Thêm danh sách được đánh số và đánh dấu đầu dòng vào nội dung. Thêm plugin Danh sách nâng cao
                                để có chức năng mở rộng.</p>
                        </a-card>
                    </a-col>
                    <a-col :span="8">
                        <a-card class="m-2 h-48" title="Media" :bordered="false">
                            <p>Thêm các phần tử âm thanh và video HTML5 vào vùng có thể chỉnh sửa. Bao gồm tùy chọn xem
                                trước trực tiếp các video được nhúng.</p>
                        </a-card>
                    </a-col>
                    <a-col :span="8">
                        <a-card class="m-2 h-48" title="Multi-Root Editing" :bordered="false">
                            <p>Tạo các tài liệu có mẫu đầy đủ, tất cả đều có trong một trình soạn thảo TinyMCE.</p>
                        </a-card>
                    </a-col>
                    <a-col :span="8">
                        <a-card class="m-2 h-48" title="Nonbreaking Space" :bordered="false">
                            <p>Thêm nút để chèn thực thể dấu cách không ngắt &nbsp;tại điểm chèn con trỏ.</p>
                        </a-card>
                    </a-col>
                    <a-col :span="8">
                        <a-card class="m-2 h-48" title="Noneditable" :bordered="false">
                            <p>Ngăn chặn người dùng cuối có thể chỉnh sửa nội dung trong các thành phần được chỉ định mceNonEditablelớp.</p>
                        </a-card>
                    </a-col>
                    <a-col :span="8">
                        <a-card class="m-2 h-48" title="Page Break" :bordered="false">
                            <p>Thêm hỗ trợ ngắt trang và chèn ngắt trang vào vùng có thể chỉnh sửa.</p>
                        </a-card>
                    </a-col>
                    <a-col :span="8">
                        <a-card class="m-2 h-48" title="Paste" :bordered="false">
                            <p>Chức năng tiêu chuẩn để sao chép và dán, với một loạt các tùy chọn cấu hình.</p>
                        </a-card>
                    </a-col>
                    <a-col :span="8">
                        <a-card class="m-2 h-48" title="Preview" :bordered="false">
                            <p>Hiển thị cửa sổ bật lên của nội dung hiện tại ở định dạng chỉ đọc thông qua nút xem trước trên thanh công cụ.</p>
                        </a-card>
                    </a-col>
                    <a-col :span="8">
                        <a-card class="m-2 h-48" title="Print" :bordered="false">
                            <p>Thêm nút in vào thanh công cụ và một Printmục vào Filemenu thả xuống.</p>
                        </a-card>
                    </a-col>
                    <a-col :span="8">
                        <a-card class="m-2 h-48" title="Quick Toolbar" :bordered="false">
                            <p>Kích hoạt các thành phần giao diện người dùng kiểu Medium để giúp người dùng tạo nội dung nhanh hơn.</p>
                        </a-card>
                    </a-col>
                    <a-col :span="8">
                        <a-card class="m-2 h-48" title="Save" :bordered="false">
                            <p>Thêm nút lưu vào thanh công cụ TinyMCE, với các tùy chọn để tùy chỉnh việc thực thi plugin.</p>
                        </a-card>
                    </a-col>
                    <a-col :span="8">
                        <a-card class="m-2 h-48" title="Search and Replace" :bordered="false">
                            <p>Thêm hộp thoại tìm kiếm/thay thế vào TinyMCE để tìm và thay thế nội dung nhanh hơn.</p>
                        </a-card>
                    </a-col>
                    <a-col :span="8">
                        <a-card class="m-2 h-48" title="Tab Focus" :bordered="false">
                            <p>Tab vào và ra khỏi điều khiển TinyMCE trong biểu mẫu web của bạn với các tùy chọn cấu hình xung quanh tiêu điểm tab.</p>
                        </a-card>
                    </a-col>
                    <a-col :span="8">
                        <a-card class="m-2 h-48" title="Table" :bordered="false">
                            <p>Thêm chức năng chỉnh sửa bảng với các tùy chọn sửa đổi ô, hàng và cột.</p>
                        </a-card>
                    </a-col>
                    <a-col :span="8">
                        <a-card class="m-2 h-48" title="Template" :bordered="false">
                            <p>Thêm hỗ trợ cho các mẫu tùy chỉnh với nhiều tùy chọn cấu hình để thực thi các mẫu đó.</p>
                        </a-card>
                    </a-col>
                    <a-col :span="8">
                        <a-card class="m-2 h-48" title="Text Color" :bordered="false">
                            <p>Khả năng tùy chỉnh màu văn bản của bạn đã được chuyển vào lõi trình soạn thảo của TinyMCE 5.</p>
                        </a-card>
                    </a-col>
                    <a-col :span="8">
                        <a-card class="m-2 h-48" title="Text Pattern" :bordered="false">
                            <p>Ghép các mẫu đặc biệt trong văn bản và áp dụng các định dạng, thay thế văn bản hoặc thực thi các lệnh trên các mẫu này.</p>
                        </a-card>
                    </a-col>
                    <a-col :span="8">
                        <a-card class="m-2 h-48" title="Visual Blocks" :bordered="false">
                            <p>Cho phép người dùng xem các thành phần cấp khối chẳng hạn như các đoạn văn trong vùng có thể chỉnh sửa.</p>
                        </a-card>
                    </a-col>
                    <a-col :span="8">
                        <a-card class="m-2 h-48" title="Visual Characters" :bordered="false">
                            <p>Xem các ký tự vô hình như &nbsp;được hiển thị trong vùng có thể chỉnh sửa.</p>
                        </a-card>
                    </a-col>
                    <a-col :span="8">
                        <a-card class="m-2 h-48" title="Word Count" :bordered="false">
                            <p>Thêm chức năng đếm từ và ký tự bằng bộ đếm ở cạnh phải của thanh trạng thái.</p>
                        </a-card>
                    </a-col>
                </a-row>
            </div>
        </a-tab-pane>
    </a-tabs>
</template>
<script src="./DocuWizardEditor.ts" lang="ts"/>



