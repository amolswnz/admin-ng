<?php require_once 'header.php' ?>
<body>
<?php require_once 'navigation.php' ?> 
<div class="container-fluid">
    <div class="row">
        <div class="col-md-12">
            <h1>Administrator Manager</h1>
        </div>
    </div>
    <hr>
    <div class="row">
        <div class="col-md-12">
            <form method="POST" 
                  class="form-horizontal col-md-6 col-md-offset-3" role="form"
                  id="addUserForm" data-toggle="validator" >
                <div class="form-group">
                    <legend>Add User</legend>
                </div>
                <div class="form-group">
                    <label for="fullName" class="col-sm-3 control-label">Full Name *</label>
                    <div class="col-sm-9">
                        <input type="text" id="fullName" class="form-control" value="" required>
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="email" class="col-sm-3 control-label">Email *</label>
                    <div class="col-sm-9">
                        <input type="email" id="email" class="form-control" value="" required>
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="username" class="col-sm-3 control-label">Username</label>
                    <div class="col-sm-9">
                        <input type="text" id="username" class="form-control" value="">
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="pwd" class="col-sm-3 control-label">Password *</label>
                    <div class="col-sm-9">
                        <input type="password" id="pwd" class="form-control" value="" required>
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="cpwd" class="col-sm-3 control-label">Confirm Password *</label>
                    <div class="col-sm-9">
                        <input type="password" id="cpwd" class="form-control" data-match="#pwd" value="" required>
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="role" class="col-sm-3 control-label">Role</label>
                    <div class="col-sm-9">
                        <select name="role" id="role" class="form-control"> </select>
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="avatar" class="col-sm-3 control-label">Avatar URL</label>
                    <div class="col-sm-9">
                        <input type="url" id="avatar" class="form-control" value="">
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="status" class="col-sm-3 control-label">Status</label>
                    <div class="col-sm-9">
                    <select id="status" class="form-control">
                            <option>Active</option>
                            <option>Inactive</option>
                        </select>
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="createdBy" class="col-sm-3 control-label">Created by</label>
                    <div class="col-sm-9">
                        <input type="text" id="createdBy" class="form-control" value="0" readonly="readonly">
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-9 col-sm-offset-3">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <hr>
</div>
<?php require_once 'footer.php' ?>
<script src="https://code.jquery.com/jquery-3.1.1.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script src="js/validator.js"></script>
<script type="text/javascript">
    $(function() {
        $.ajax({ url: 'php/getRoles.php', type: 'GET', dataType: 'json' })
        .done(function(response) {
            $.each(response, function(index, data) {
                $("#role").append("<option>" + data.role + " </option>");
            });
        });
    });
    $("#addUserForm").submit(function(event) {
        event.preventDefault();
        $.ajax({
            url: 'php/UserController.php',
            type: 'POST',
            dataType: 'json',
            data: { action: 'addUser', formData: $("#addUserForm").serializeArray() }
        })
        .done(function() {
            console.log("success");
        })
        .fail(function() {
            console.log("error");
        })
        .always(function() {
            console.log("complete");
        });
    });
</script>
</body>
</html>